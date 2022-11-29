import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const { veri: blog, yukleniyor, hata } = useFetch(`http://localhost:8000/yazilar/${id}`);
    const navigate = useNavigate();
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/yazilar/${id}`,
            {
                method: 'DELETE'
            }
        ).then(() => {
            console.log("Silindi");
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            {yukleniyor && <div> Yükleniyor...</div>}
            {hata && <div>{hata}</div>}
            {blog &&
                (
                    <article>
                        <h2>
                            {blog.ad}
                        </h2>
                        <p>
                            Yazar: {blog.yazar}
                        </p>
                        <div>
                            {blog.aciklama}
                        </div>
                        <button className='delete' onClick={handleDelete} >Sil</button>

                    </article>
                )
            }

        </div>

    );
}

export default BlogDetails;