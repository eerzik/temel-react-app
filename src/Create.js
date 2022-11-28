const Create = () => {
    return (
        <div className="create">
            <h2 style={{ color: '#ff793f' }}>Yeni Yazı Ekle</h2>
            <form>
                <label>Yazı Başlık :
                    <input type="text" required></input>
                </label>
                <label>Yazı Açıklama :   </label>
                <textarea  required></textarea>

                <label>Yazar: </label>
                <select>
                    <option value="Luffy">Luffy</option>
                    <option value="Zoro">Zoro</option>
                    <option value="Sanji">Sanji</option>
                </select>

                <button>Ekle</button>

            </form>
        </div>
    );
}

export default Create;