import React from 'react';

const BlogList = ({bloglar,baslik}) => {


    return (
        <div className="home">
            <h2 style={{color:'#ff793f'}} >{baslik}</h2>
            {bloglar.map((blog) => (
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