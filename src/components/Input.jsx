import React from 'react'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Escribe algo' />
      <div className="send">
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default Input