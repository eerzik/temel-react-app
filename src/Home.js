
import { useState } from "react";
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


    return (
        <div className="home">
            <BlogList bloglar={blogs} baslik="Bütün Yazılar" />
        </div>

    );


}

export default Home;