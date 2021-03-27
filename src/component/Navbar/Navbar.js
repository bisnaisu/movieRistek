import react from 'react'


export default function Navbar(){
    function handleClick(){
        const hamburger_menu = document.querySelector(".hamburger-menu");
        const container = document.querySelector(".container");
        hamburger_menu. addEventListener("click", () => {
            container.classList.toggle("active");
        });
    }
    return(
       <div class="navbar">
        <div class="menu">  
          <h3 class="logo">Movie<span>Ristek</span></h3>
          <div class="hamburger-menu" onClick = {handleClick}>
            <div class="bar"></div>
          </div>  
        </div>
      </div>
    )
} 