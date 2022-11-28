
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [yukleniyor, setYukleniyor] = useState(true);
    const [hata, setHata] = useState(null);

    useEffect(() => {
        console.log("denemeler") 
        fetch('http://localhost:8000/yazilars')
            .then(res => {
                if (!res.ok) throw Error("veriler çekilemedi");
                return res.json();
            })
            .then(data => {
                // console.log(data);

                setBlogs(data);
                setYukleniyor(false);
            }).catch(err => {
                setYukleniyor(false);
                setHata(err.message);

            })
    }, [])

    const handleClick = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            {hata && <div className="error">{hata}</div>}
            {yukleniyor && <div className="loading" >Yükleniyor</div>}
            {blogs && <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick} />}
        </div>

    );


}

export default Home;