import react from 'react'
import './styles.css'
import Navbar from '../../component/Navbar/Navbar'
import About from '../../pages/About/index.js'
import Home from '../../pages/Home/Home'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

export default function FrontPage(){
    return(
     <div class="container">
        <Navbar/>
        <div class="main-container">
            <div class="main">
                <header>
                    <div class="overlay">
                        <div class="inner">
                            <h2 class="title">Your movie future</h2>
                            <p>
                                Welcome to my ristek assignment of  front end development
                                HOPE YOU ENJOY :) <i>Note : this is not completed, try to click button 2X if 
                                you want get clear navbar
                                </i>
                            </p>
                            
                            <Link to="/home"><button class="btn">Movie</button></Link>
                            <button class="btn"><Link to = "/about">About Page</Link></button>
                        </div>
                    </div>
                </header>
            </div>

            <div class="shadow one"><About/></div>
            <div class="shadow two"></div>
        </div>

        <div class="links">
            <ul>
            <li>
                <a href="#" ><Link to="/home">Movie</Link></a>
            </li>
            <li>
                <a href="#"><Link to="/about">About Page</Link></a>
            </li>
            
            </ul>
        </div>
        </div>
    )

}