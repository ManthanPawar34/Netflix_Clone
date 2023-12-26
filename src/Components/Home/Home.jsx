import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
import { Link } from 'react-router-dom';
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";


const apiKey = "54ef11277b5ee0f1c92998dae56e2b43";
const url = "https://api.themoviedb.org/3/movie";

const imgurl = " https://image.tmdb.org/t/p/original/"
const popular = "popular";
const upcoming = "upcoming";
const nowplaying = "now_playing";
const toprated = "top_rated";

const Card = ({ image }) => {
  return (
    <img className="card" src={image} alt="" />
  )
}

const Row = ({ title, arr = [] }) => {
  return (

    <div className="row">
      <h2>{title}</h2>

      <div>
        {
          arr.map((item, index) => (
            <Card key={index} image={`${imgurl}${item.poster_path}`} />
          ))
        }
      </div>


    </div>
  )
}

const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopratedMovies] = useState([]);
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [genre, setGenere] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
      // console.log(results);
      setUpcomingMovies(results);
    };

    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
      setPopularMovies(results);
    };

    const fetchToprated = async () => {
      const { data: { results } } = await axios.get(`${url}/${toprated}?api_key=${apiKey}`)
      setTopratedMovies(results);
    };

    const fetchNowplaying = async () => {
      const { data: { results } } = await axios.get(`${url}/${nowplaying}?api_key=${apiKey}`)
      setNowplayingMovies(results);
    };

    const getAllGenre = async () => {
      const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      // console.log(genres);
      setGenere(genres);
    };

    fetchUpcoming()
    fetchPopular()
    fetchToprated()
    fetchNowplaying()
    getAllGenre();
  }, [])


  return (

    <section className='home'>
      <div className="banner" style={{backgroundImage:popularMovies[0]?`url(${`${imgurl}/${popularMovies[0].poster_path}`})`:"none" }}>
        
        {popularMovies[0] &&<h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] &&<p>{popularMovies[0].overview}</p>}
        <div>
        <button>Play <BiPlay/></button>
        <button>My List<AiOutlinePlus/></button>
        </div>

      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={ "Now Playing"} arr={nowplayingMovies}/>
      <Row title={ "Popular"} arr={popularMovies}/>
      <Row title={ "Top Rated"} arr={topRatedMovies}/>

      <div className="genreBox">
         {genre.map((item)=>(
          <Link key={item.id} to={`/genre/${item.name}`}>{item.name}</Link>
         ))}
      </div>

    </section>
  )
}

export default Home