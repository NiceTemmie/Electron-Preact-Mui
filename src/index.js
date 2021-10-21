//Importing Preact (jsx)
import { h,render} from 'preact';

//Importing Materials Design components
//See: https://mui.com/getting-started/usage/
import Button from '@mui/material/Button'

//importing CSS so that webpack compile it
import './index.css'


//Simplest 'Hello world' using Preact
//See: https://preactjs.com/guide/v10/tutorial
//This will be your main js file
//You're free to do anything here

const App = <Button variant="contained" color="primary">Quickstart</Button>
render(App, document.body);
