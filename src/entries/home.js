 import React from 'react';
 //import ReactDOM from 'react-dom';
 import {render} from 'react-dom';
 //import Playlist from './src/playlist/components/Playlist';
 import Home from '../pages/containers/home';
 import data from '../api.json';
 // import Profesores from './src/profesores/components/Profesores';
 // import data1 from './src/profesores.json';
 // import Precios from './src/precios/components/Precios';

 //ReactDOM.render(que voy a renderizar);
 //ReactDOM.render(donde voya renderizar);
const app = document.getElementById('app')
render(<Home data = {data} />, app);
//
// const profe = document.getElementById('profe')
// render(<Profesores data = {data1} />, profe);
//
// const precios = document.getElementById('precios')
// render(<Precios />, precios);
//<Media type="video" title="introduccion a Edutak" author="Joel Vilca" image="./images/covers/clase1.jpeg"/>,
