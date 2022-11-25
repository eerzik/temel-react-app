
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            ad: 'Yeni başlayanlar için c#',
            aciklama: "lorem ipsum",
            yazar: 'luffy',
            id: 1
        },

        {
            ad: 'React öğreniyorum',
            aciklama: "lorem ipsum",
            yazar: 'zoro',
            id: 2
        },

        {
            ad: 'İleri seviye c#',
            aciklama: "lorem ipsum",
            yazar: 'luffy',
            id: 3
        },

        {
            ad: 'MVC Öğreniyorum',
            aciklama: "lorem ipsum",
            yazar: 'sanji',
            id: 4
        }
    ])

    const [isim, setIsim] = useState('luffy');

    // [] eklemezsek usestate lerde de çalışır eklersek sadece sayfa yüklenirken bir kez çalışır.
    //[blogs] olarak yazarsak bloglar ile ilgili değişim olursa çalışır.
    useEffect(() => {
        console.log("useEffect çalıştı");

    }, [blogs, isim])

    const handleClick = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick} />
            <button onClick={()=>setIsim('zoro')}>Değiştir</button>
        </div>

    );


}

export default Home;