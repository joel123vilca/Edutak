 import React from 'react';
 //import ReactDOM from 'react-dom';
 import {render} from 'react-dom';
 import Media from './src/playlist/components/media.js';

 //ReactDOM.render(que voy a renderizar);
 //ReactDOM.render(donde voya renderizar);
const app = document.getElementById('app')
render(<Media type="video" title="introduccion a Edutak" author="Joel Vilca" image="./images/covers/clase1.jpeg"/>, app);
