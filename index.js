 import React from 'react';
 //import ReactDOM from 'react-dom';
 import {render} from 'react-dom';
 import Playlist from './src/playlist/components/Playlist';
 import data from './src/api.json';

 //ReactDOM.render(que voy a renderizar);
 //ReactDOM.render(donde voya renderizar);
const app = document.getElementById('app')
render(<Playlist data = { data }/>, app);
//<Media type="video" title="introduccion a Edutak" author="Joel Vilca" image="./images/covers/clase1.jpeg"/>,
