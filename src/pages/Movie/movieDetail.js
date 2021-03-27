import { CogSolid } from '@graywolfai/react-heroicons';
import { data } from 'autoprefixer';
import react,{useState,useEffect} from 'react';
import './styles.css';

export default function MovieDetail(props){

    // ----------------------------------------------------------------
    var dsp = props.display;
    var id  = props.id;
    var ImgSrc =  "url("+"'"+props.Poster+"'"+")"
    if(dsp == ""){
        dsp = "none"
    }else{
        dsp = ""
        props.setMode("detail")
    }
    const plot = "This Movie from DB Omdb account, serve a story that"
    
    //----------------------------------------------------------------

    useEffect(()=>{
        if(dsp != "none")
            getData()
    },[dsp])

    function addLikeId(){
        document.querySelector('#lk').setAttribute('id','like')
    }

    function removeLikeId(){
        document.querySelector('#like').setAttribute('id','lk')
    }

    function addWhilstId(){
        document.querySelector('#wh').setAttribute('id','whilst')
    }

    function removeWhilstId(){
        document.querySelector('#whilst').setAttribute('id','wh')
    }


    const [detail,setDetail] = useState([])
    async function getData(){
        var url = "http://www.omdbapi.com/?i="+id+"&apikey=263d22d8"
        var coba = 'http://www.omdbapi.com/?i=tt0484469&apikey=263d22d8'
        console.log("Coba is ->"+coba)
        console.log("url is ->"+url)
        const respond = await fetch(url);
        const data = await respond.json()
        setDetail(data)

        try{
            document.querySelector('#like').setAttribute('id','lk')
        }catch(err){}

        try{
            document.querySelector('#whilst').setAttribute('id','wh')
        }catch(err){}

        console.log(isWhilst() +"     "+isLike())

        if(isLike() != -1)
            document.querySelector('#lk').setAttribute('id','like')
        if(isWhilst() != -1)
            document.querySelector('#wh').setAttribute('id','whilst')

    }

    function isLike(){
        const movieList = props.like
        for(let i = 0 ; i < movieList.length; i ++){
            if(movieList[i].imdbID === props.id)
                return i
        }
        return -1
    }

    function isWhilst(){
        const movieList = props.whilst
        for(let i = 0 ; i < movieList.length; i ++){
            if(movieList[i].imdbID === id)
                return i
        }
        return -1
    }

    function handleLike(){
       if(isLike() == -1){
            props.like.push(detail)
            addLikeId()
       }else{
            props.like.splice(isLike(),1)
            removeLikeId()
       }
    }

    function handleWhilst(){
        // console.log("isWhislt() - > "+isWhilst())
        if(isWhilst() === -1){
            props.whilst.push(detail)
            addWhilstId()
        }else{
            props.whilst.splice(isWhilst(),1)
            removeWhilstId()
        }
    }


    return(
       <div className = "movie-detail" style={{display : dsp,background : ImgSrc}}>

         <div class="containers">
            <div class="cellphone-container">    
                <div class="movie">       
                    <div class="menu"><i class="material-icons"></i></div>
                    <div class="movie-img" style={{background : ImgSrc}}></div>
                    <div class="text-movie-cont">
                    <div class="mr-grid">
                        <div class="col1">
                        <h1>{detail.Title}</h1>
                        <ul class="movie-gen">
                            <li>PG-13  /</li>
                            <li>{detail.Runtime}/</li>
                            <li>{detail.Genre}</li>
                        </ul>
                        </div>
                    </div>
                    <div class="mr-grid summary-row">
                        <div class="col2">
                        <h5>SUMMARY</h5>
                        </div>
                        <div class="col2">
                        <ul class="movie-likes">
                            <li><i class="material-icons"></i><b>Ratings : {detail.imdbRating}</b></li>
                            <li><i class="material-icons">&#xE813;</i>{detail.imdbVotes}</li>
                        </ul>
                        </div>
                    </div>
                    <div class="mr-grid">
                        <div class="col1">
                        <p class="movie-description">{plot} {detail.Plot}</p>
                        </div>
                    </div>
                    <div class="mr-grid actors-row">
                        <div class="col1">
                        <p class="movie-actors">{detail.Actors}</p>
                        </div>
                        <div class="col1">
                        <p class="movie-actors">{detail.Writers}</p>
                        </div>
                    </div>
                    <div class="mr-grid action-row">
                        <div class="col2"><div onClick = {handleWhilst} id = "wh" class="watch-btn"><h3><i class="material-icons">&#xE037;</i>Whilist</h3></div>
                        </div>
                        <div class="col2"><div onClick = {handleLike} id = "lk" class="watch-btn"><h3><i class="material-icons">&#xE112;</i>Like</h3></div>
                        </div>
                        {/* <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
                        </div>
                        <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
                        </div>
                        <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
                        </div> */}
                    </div>
                    </div>
                </div>
            </div>
            </div>
            

       </div>
    )
}