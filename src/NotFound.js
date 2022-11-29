import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <>

        <div className="notFound">
            <h2>Yanlış Sayfa</h2>
            <p>Sayfa Bulunamadı!</p>
            <Link to="/">AnaSayfa</Link>
        </div>
        </>
     );
}
 
export default NotFound;