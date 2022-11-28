import React from 'react';
import { Link } from 'react-router-dom'

const BlogList = ({ bloglar, baslik }) => {


    return (
        <div className="home">
            <h2 style={{ color: '#ff793f' }} >{baslik}</h2>
            {bloglar.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.ad}</h2>
                        <p>Yazının yazarı : {blog.yazar}</p>
                    </Link>

                </div>
            ))
            }
        </div>
    );
};

export default BlogList;