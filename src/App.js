import {BrowserRouter,Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Homepge from "./Pages/Homepge";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core";
function App() {
const useStyles = makeStyles(() =>({
  App: {
    backgroundcolor:'#14161a',
    color:'white',
    minHeight:'100vh'
  }
}))
const classes = useStyles()

  return (
    
      <div className={classes.App}>
        <BrowserRouter> 
        <Routes>                      
        <Header/>
        <Route exact path="/" Components={<Homepge/>} />
        <Route path="/Coins/:id" Components={<Coinpage/>}/>
        </Routes> 
        </BrowserRouter>
      </div>
    
  )
}

export default App;
