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
      <div className='cont-github flex flex-col items-center w-4/5 my-0 mx-auto'>
      <div className='cont-gral flex'>
         <div className='cont-img-git p-1 w-2/5 h-2/5'>
        <img src={user.avatar_url} alt={user.name} className='h-full w-full'/>
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
     
        
        <div className='cont-btn-git flex justify-between mt-12'>
          <Link className='git w-1/4 py-2.5 px-5' to={user.html_url}>Github</Link>
          <Link className='linkedin py-2.5 px-5' to={user.blog}>Linkedin</Link>
        </div>
        
    </div>
    </div>
    
  )
}

export default Github