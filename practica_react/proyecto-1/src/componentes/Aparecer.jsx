import React, { useState } from 'react'

function Aparecer() {
    const [show, setShow] = useState(true);

            const handleClick = (event) => {
                setShow(!show);
            }
    return (
      <div>
          <button onClick={handleClick}>{show ? "Ocultar" : "Mostrar"} texto</button>
          {  show && <h2>HIDE ME!</h2> }
      </div>
    )
}

export default Aparecer