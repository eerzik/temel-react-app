const Home = () => {


    return (
        <div>
            <h2>AnaSayfa</h2>
            <button onClick={(e) => { console.log(e); }}>Tıkla</button>
        </div>
    );



    // const handleClick = () => {
    //     console.log("merhaba")
    // }

    // const handleClick2 = (isim,e) => {
    //     console.log(isim,e);
    // }

    // return (
    //     <h2>AnaSayfa</h2>
    //         {/* parametre kullanmadığımız için parantez aç kapa yapmıyoruz eğer parantez açarsak sayfa yenilendiğinde console merhaba yazar */}
    //         {/* <button onClick={handleClick()}>Tıkla</button></> */}
    //         <button onClick={(e) => handleClick2('luffy',e)}>Tıkla</button></>
    // );
}

export default Home;