import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Lama Chat</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Iniciar sesión</button>
            </form>
            <p>No tienes una cuenta? Registrate</p>
        </div>
    </div>
  )
}

export default Login