
import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            ad: 'Yeni başlayanlar için c#',
            aciklama: "lorem ipsum",
            yazar: 'luffy',
            id: 1
        },

        {
            ad: 'YReact öğreniyorum',
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
            { blogs.map((blog)=>(
               <div className="blog-preview" key={blog.id}>
                <h2>{blog.ad}</h2>
                <p>Yazının yazarı : {blog.aciklama}</p>
                </div>
            ))            
            }
        </div>
    );


}

export default Home;