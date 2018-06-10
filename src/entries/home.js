 import React from 'react';
 //import ReactDOM from 'react-dom';
 import {render} from 'react-dom';
 //import Playlist from './src/playlist/components/Playlist';
 import Home from '../pages/containers/home';
 import data from '../api.json';
 // import Profesores from './src/profesores/components/Profesores';
 // import data1 from './src/profesores.json';
  
 //ReactDOM.render(que voy a renderizar);
 //ReactDOM.render(donde voya renderizar);
const homeContainer = document.getElementById('home-container')
render(<Home data = {data} />, homeContainer);
// const precios = document.getElementById('precios')
// render(<Precios/>,precios);
//
// const profe = document.getElementById('profe')
// render(<Profesores data = {data1} />, profe);
//
// const precios = document.getElementById('precios')
// render(<Precios />, precios);
//<Media type="video" title="introduccion a Edutak" author="Joel Vilca" image="./images/covers/clase1.jpeg"/>,
