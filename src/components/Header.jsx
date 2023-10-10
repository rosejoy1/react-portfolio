import React from 'react';
import './Header.css';
import img from './img.jpeg'
import {BsSun} from 'react-icons/bs';
import {FiMoon} from 'react-icons/fi';


function Header({theme,setTheme}) {

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  return (
    <div>
       <nav>
        <div class="navbar">
            <input type="checkbox" id="check" />
            {theme==='dark'?(
                          <div onClick={switchTheme}><BsSun size={'30px'} /></div>):
                          (<div onClick={switchTheme}><FiMoon size={'30px'} style={{color:'white'}} /></div>

            )
}

            <ul>
                <li class="list"><a class="link" href="">Home</a></li>
                <li class="list"><a class="link" href="">About</a></li>
                <li class="list"><a class="link" href="">Skills</a></li>
                <li class="list"><a class="link" href="">Contact</a></li>
            </ul>
            <label for="check" class="checkbox">
              {theme==='dark'?(
                 <i style={{color:'black'}}  class="fa-solid fa-bars "></i>
              ):
              ( <i style={{color:'white'}}   class="fa-solid fa-bars "></i>)
       }
               
            </label>
            <img className='imgg' src={img} alt="" />
           
         
        </div>
      </nav>
    </div>
  );
}

export default Header;
