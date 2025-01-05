import { useEffect, useState } from 'react'
import Header from './Components/Header';
import './App.css'
import Loader from './Components/Loader';
import InfiniteScrolling from './Components/infiniteScrolling';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
}
body{
font-family: sans-serif;
background-color: #183e64;
margin: 0px, 2rem;
}
`;

const  WrapperImage = styled.section`

margin: 4rem 1rem;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-auto-rows:300px;

`

function App() {

  const[images, setImages] = useState([]);

  useEffect(() =>{
    fetchImages();
  }, [])

  const fetchImages = () =>{
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = import.meta.env.VITE_API_KEY

    axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=5`)
    // .then(res => console.log(res.data))
    .then(res => setImages([...images, ...res.data]))
  }
  

  return (
    <>
      <Header/>
      <GlobalStyle/>
    
      <InfiniteScroll 
      dataLength = {images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader/>}
      >
      <WrapperImage>
      {images.map(image =>(
         <InfiniteScrolling url={image.urls.thumb} key={image.id}/>
      ))}
     </WrapperImage>
     </InfiniteScroll>
    </>
  )
}

export default App
