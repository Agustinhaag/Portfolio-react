import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const Github = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const userGithub = async () => {
            const data = await axios.get("https://api.github.com/users/Agustinhaag");
            setUser(data.data);
           
          };
          userGithub();
    },[]) 
    console.log(user)
  return (
    <div>
      <Navbar/>
      <div className='cont-github'>
      <div className='cont-gral'>
         <div className='cont-img-git'>
        <img src={user.avatar_url} alt={user.name} />
      </div>

      <div className='cont-info'>
        <h4>{user.name}</h4>
        <p><span>Biografía:</span> {user.bio}</p>
        <p><span>Cantidad de repos:</span> {user.public_repos}</p>
        <p><span>Creacion:</span> {new Date(user.created_at).toLocaleDateString()}</p>
        <p><span> Ubicacion:</span> {user.location}</p>
        <p><span> Email:</span> <a href="mailto:agustin-haag@hotmail.com">agustin-haag@hotmail.com</a></p>
        <p>{user.company ? user.company : 'Desarrollador independiente'}</p>
      </div>
      </div>
     
        
        <div className='cont-btn-git'>
          <Link className='git' to={user.html_url}>Github</Link>
          <Link className='linkedin' to={user.blog}>Linkedin</Link>
        </div>
        
    </div>
    </div>
    
  )
}

export default Github