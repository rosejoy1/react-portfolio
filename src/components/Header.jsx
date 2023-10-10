import React from 'react';
import './Header.css';
import img from './img.jpeg'

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
            <i onClick={switchTheme} class="fa-solid fa-toggle-on fa-xl"></i>
          
            <ul>
                <li class="list"><a class="link" href="">Home</a></li>
                <li class="list"><a class="link" href="">Menu</a></li>
                <li class="list"><a class="link" href="">Services</a></li>
                <li class="list"><a class="link" href="">Shop</a></li>
            </ul>
            <label for="check" class="checkbox">
                <i class="fa-solid fa-bars "></i>
            </label>
            <img className='imgg' src={img} alt="" />
           
         
        </div>
      </nav>
    </div>
  );
}

export default Header;
