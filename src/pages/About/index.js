import react from 'react'
import './styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
export default function About(){
    
    
    return(
        <div className = "About">

            <div class="landing">
            <div class="base">
                <div class="image">
                <img src="https ://teknojurnal.com/wp-content/uploads/2011/11/Logo-Ristek-Fasilkom-UI.jpg" />
                </div>
                <div class="copy">
                <div class="logo-about">
                    <img src = "https://teknojurnal.com/wp-content/uploads/2011/11/Logo-Ristek-Fasilkom-UI.jpg" />
                </div>
                <div class="title">
                    <small>About MovieRistek app</small> Have Fun all day</div>
                <div class="text">This movie app hasn't completed at all but it can use  some features that might help you in searching some of the movies that popular and unpopular in Tv / Box office such as :  <br />-Like and Booking Marks
                <br/>-contain simple and normal UI & UX <br/>-The defects of this app was  the code  is not reusable                
                .</div>
                
                <Link to = "/home"><a class="cta" target="_blank">Movie App</a></Link>
                </div>
            </div>
        </div>

        </div>
    )
}