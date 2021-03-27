import react,{useState,useEffect} from 'react';
import './styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Card from '../../component/Card/index'
import Filterbar from '../../component/filterBar/index'
import MovieDefault from '../../Datas/MovieList'
import Footer from '../../component/footer/footer'
import MovieDetail from '../Movie/movieDetail'
import { data } from 'autoprefixer';
import Navbar from '../../component/Navbar/Navbar'


export default function Home(){
    const [movie,setMovie] = useState(MovieDefault)
    const [mode,setMode] = useState("home")
    const [search,setSearch] = useState("")
    const [like,setLike] = useState([])
    const [whilst,setWhilst] = useState([])
    const [empty,setEmpty] = useState([])
    const [dsp,setDsp] = useState("")
    const [clickId, setClickId] = useState('NONE')
    const [clickImg, setClickImg] = useState('NONE')

    useEffect(() =>{
        if(search == null){
          setMovie(MovieDefault)
        }
        
        if(mode == "Home"){
          setMovie(MovieDefault)
          getMovie(search.trim())
        }else if(mode == "Like"){
          setMovie(like)
        }else if(mode == "Whilst"){
          console.log(whilst)
          setMovie(whilst)
        }
        setDsp("")
    },[search,mode])

    async function getMovie(nameMovie){
      console.log(nameMovie)
      let url = "http://www.omdbapi.com/?s="+nameMovie+"&apikey=263d22d8";
      const response = await fetch(url)
      const data = await response.json()
      const datas = data.Search
      if(datas == undefined){
        setMovie(MovieDefault)
      }else{
        setMovie(datas)
      }
    }
    return (

        <div className="Home">
        <br/>
        <Filterbar
          mode = {mode}
          changeMode = {setMode}
          search = {search}
          changeSearch = {setSearch}
          />
          <br/>
          <br/>
          <br/>
          <div class = "movie-container" style = {{display: dsp}}>
          <ul>
            {movie.map(data=>{
              return(
                <Card 
                  title = {data.Title}
                  year = {data.Year}
                  imdbID = {data.imdbID}
                  type = {data.Type}
                  image = {data.Poster}
                  setDsp = {setDsp}
                  setId = {setClickId}
                  setImg = {setClickImg}
                />
              )
            })}
          </ul>
          </div>
          <MovieDetail
          display = {dsp}
          setDisplay = {setDsp}
          id = {clickId}
          Poster = {clickImg}

          like = {like}
          setLike = {setLike}
          whilst = {whilst}
          setWhilst = {setWhilst}
          setMode = {setMode}
          />
        </div>


    )
}


