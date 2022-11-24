import Navbar from "./Navbar";
import AnaSayfa from "./Home";


function App() {

  const baslik = 'AOS Blog'
  let okunmaSayisi = 300
  const durum = true
  const blog = { ad: "ilk", aciklama: "ilk açıklama" };
  const link = "www.google.com"


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <AnaSayfa></AnaSayfa>
        
        <p>----------------------</p>

        {/* <h1>{baslik}</h1>
        <h1>{"Başlık yerine kullandım"}</h1>
        <p>Okunma Sayısı {okunmaSayisi}</p>
        <p>Durum {durum}</p>
        <p>Blog Ad {blog.ad}</p>
        <p>Blog Açıklama {blog.aciklama}</p>
        <a href={link}>Google</a> */}
      </div>

    </div>
  );
}

export default App;
