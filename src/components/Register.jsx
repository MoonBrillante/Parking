import React from 'react'
import {AiFillLock} from 'react-icons/ai'
import {FaCarAlt,FaUser} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {PiGridNineBold} from 'react-icons/pi'
import {AiOutlineMail} from 'react-icons/ai'
import './Register.css'

const Register = () => {
  return (
    <div className="register-wrapper">
    <form className="login-form " action="" >
        <h1>Register Solicitante</h1>
        <div className="input-box">
        <input type="text" placeholder="Nombre" required />
        <i><FaUser  /></i>
    </div>
    
    <div className="input-box">
        <input type="text" placeholder="Apellidos" required />
        <i><FaUser /></i>
    </div>
    <div className="input-box">
        <input type="email" placeholder="Email" required />
        <i><AiOutlineMail  /></i>
    </div>
    
    <div className="input-box">
        <input type="password" placeholder="Password" required />
        <i><AiFillLock /></i>
    </div>

    <div className="input-box">
        <input type="text" placeholder="DNI" required />
        <i><PiGridNineBold /></i>
    </div>

    <div className="input-box">
        <input type="number" placeholder="Teléfono" required />
        <i><BsFillTelephoneFill /></i>
    </div>

    <div className="input-box">
        <input type="text" placeholder="Matricula" required />
        <i><FaCarAlt /></i>
    </div>
    
    <button type="submit" class="btn">Register</button>

        </form>
    </div>

  )
}

export default Register