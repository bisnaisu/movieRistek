import react,{useEffect} from 'react'
import './styles.css'


export default function Card(props){

    function handleClick(){
        console.log("Card Click")
        props.setDsp("none")
        props.setId(props.imdbID)
        props.setImg(props.image)
    }
    
    var imageUrl = "url("+"'"+props.image+"'"+")";
    if(props.image == "N/A")
        imageUrl = "url("+"'"+'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'+"'"+")";
        return(
        <div class="card" onClick = {handleClick}>
            <a href="#">
                <div class="img1" style = {{background : imageUrl}}></div>
                <div class="img2" style = {{background : imageUrl}}></div>
                <div class="title">{props.title}</div>
                <div class="text">{props.title} is an {props.type} which release on {props.year}.</div>
                <a href=""><div class="catagory">{props.type}<i class="fas fa-film"></i></div></a>
                <a href=""><div class="views">{props.year}  <i class="far fa-eye"></i> </div></a>
            </a>
        </div>
    )
}