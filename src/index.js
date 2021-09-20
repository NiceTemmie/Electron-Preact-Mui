//Importing Preact (jsx)
import { h,render} from 'preact';

//Importing Materials Design components
//See: https://material.preactjs.com/
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

//importing CSS so that webpack compile it
import './main.css'


//Simplest 'Hello world' using Preact
//See: https://preactjs.com/guide/v10/tutorial
//This will be your main js file
//You're free to do anything here

const App = <Button raised ripple>Quickstart</Button>;
render(App, document.body);
