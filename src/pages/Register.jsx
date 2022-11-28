import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" />
                <button>Registrarse</button>
            </form>
            <p>Ya tienes una cuenta? Inicia sesión</p>
        </div>
    </div>
  )
}

export default Register