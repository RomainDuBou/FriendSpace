import "./Header2.css"
import React, { useState } from "react";

function Header2 () {
    const [valeurInput, setValeurInput] = useState('');

    const handleChange = (e) => {
        setValeurInput(e.target.value);
      };


      return (
    <section>
        <div className="header2">
            <input 
            type="text" 
            placeholder="Des nouvelles à partager ?"
            // value={valeurInput}
            onChange={handleChange} />
            <button>Partager</button>
        </div>

    </section>
    );
}

export default Header2;