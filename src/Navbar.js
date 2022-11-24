

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>AOS Blog</h1>
            <div className="link">
                <a href="/">Ana Sayfa</a>
                <a href="/create" style={{
                    color:'white',
                    backgroundColor:'#ff793f',
                    borderRadius:'8px'
                }}>Yeni Yazı</a>

            </div>
        </nav>

    );
}

export default Navbar;