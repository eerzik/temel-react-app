
import { useState } from "react";

const Create = () => {

    const [baslik, setBaslik] = useState('');
    const [aciklama, setAciklama] = useState('');
    const [yazar, setYazar] = useState('Luffy');
    const [yukleniyor, setYukleniyor] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        setYukleniyor(true);
        const yazi = { ad: baslik, aciklama, yazar };
        console.log(yazi);
        fetch("http://localhost:8000/yazilar/",
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(yazi)
            }).then(() => {
                                console.log('Yazı Eklendi' + yazi.ad);
                 setYukleniyor(false);
            })
    }


    return (
        <div className="create">
            <h2 style={{ color: '#ff793f' }}>Yeni Yazı Ekle</h2>
            <form onSubmit={handleSubmit}>
                <label>Yazı Başlık :
                    <input type="text" required value={baslik} onChange={(e) => setBaslik(e.target.value)}></input>
                </label>
                <label>Yazı Açıklama :   </label>
                <textarea required value={aciklama} onChange={(e) => setAciklama(e.target.value)}></textarea>

                <label>Yazar: </label>
                <select value={yazar} onChange={(e) => setYazar(e.target.value)}>
                    <option value="Luffy">Luffy</option>
                    <option value="Zoro">Zoro</option>
                    <option value="Sanji">Sanji</option>
                </select>

                {!yukleniyor && <button>Ekle</button>}
                {yukleniyor && <button disabled>Yükleniyor</button>}
            </form>
        </div>
    );
}

export default Create;