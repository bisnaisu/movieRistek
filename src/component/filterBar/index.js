import react,{useState,useEffect} from 'react';
import './styles.css';

export default function Filterbar(props){
    
    useEffect(() =>{
        console.log(props.mode)
    },[props.mode])
    const [light,setLight] = useState('')
    function allOff(){
        if(light == "Home"){
            document.querySelector('#Terang').setAttribute('id','Home')
        }else if(light == "Whilst"){
            document.querySelector('#Terang').setAttribute('id','Whilst')
        }else if(light == "Like"){
            document.querySelector('#Terang').setAttribute('id','Like')
        }
    }
    function homeClick(){
    
        try{
            if(props.mode == "Whilst"){
                document.querySelector('#Terang').setAttribute('id','Whilst')
            }else if(props.mode == "Like"){
                document.querySelector('#Terang').setAttribute('id','Like')
            }else{
                allOff()
            }
        }catch(err){
            // skip
        }

        try{
            props.changeMode("Home")
            document.querySelector('#Home').setAttribute('id','Terang')
            setLight('Home')
        }catch(err){
            // skip
        }


        
    }

    function whilistClick(){
        
        console.log("Whilst")

        try{
            if(props.mode == "Home"){
                document.querySelector('#Terang').setAttribute('id','Home')
            }else if(props.mode == "Like"){
                document.querySelector('#Terang').setAttribute('id','Like')
            }else{
                allOff()
            }
        }catch(err){
            // skip
        }

        try{
            props.changeMode("Whilst")
            document.querySelector('#Whilst').setAttribute('id','Terang')
            setLight('Whilst')
        }catch(err){
            // skip
        }

        
    }

    function likeClick(){
        try{
            if(props.mode == "Whilst"){
                document.querySelector('#Terang').setAttribute('id','Whilst')
            }else if(props.mode == "Home"){
                document.querySelector('#Terang').setAttribute('id','Home')
            }else{
                allOff()
            }
        }catch(err){
            // skip
        }

        try{
            props.changeMode("Like")
            document.querySelector('#Like').setAttribute('id','Terang')
            setLight('Like')
        }catch(err){
            // skip
        }
       
    }

    function handleText(e){
        console.log(e.target.value)
        props.changeSearch(e.target.value)
        props.changeMode("Home")
    }

    function handleKey(e){
        if(e.keyCode == 13){
            console.log("Enter")
            props.changeSearch(e.target.value)
        }
    }

    return(
      
        <div class="filter-bar">
            <div id="wrap">
                <form action="" autocomplete="on">
                    <input onMouseLeave = {handleText} onChange = {handleText} onKeyPress = {handleKey} id="search" name="search" type="text" placeholder="What movie you're looking for?"/><input id="search_submit" value="Rechercher" type="submit"/>
                </form>

            </div>
            <div class="button-container">
                <a id = "Home" onClick = {homeClick} href="#" class="btn-filter btn-5">Home</a>

                <a id = "Whilst" onClick = {whilistClick} href="#" class="btn-filter btn-5">Whilst</a> 

                <a id = "Like" onClick = {likeClick} href="#" class="btn-filter btn-5">Like</a> 
            </div>
        </div>
    )
}