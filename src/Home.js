
import { useState } from "react";

const Home = () => {

    const [sayac,setSayac]=useState(0);
 
    const handleClick=()=>{
        
        setSayac(3);
    }

    return (
        <div>
            <h2>AnaSayfa</h2>
            <p>{sayac}</p>
            <button onClick={handleClick}>Tıkla</button>
        </div>
    );



}

export default Home;