import React from 'react';

const BlogList = (props) => {

    const blogs = props.bloglar;
    const baslik = props.baslik;
    return (
        <div className="home">
            <h2 style={{color:'#ff793f'}} >{baslik}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.ad}</h2>
                    <p>Yazının yazarı : {blog.aciklama}</p>
                </div>
            ))
            }
        </div>
    );
};

export default BlogList;