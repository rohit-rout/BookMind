import React,{useState,useEffect} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Books from './components/Books'
import Contribute from './components/Contribute'
import Favorites from './components/Favorites'
import Home from './components/Home'
import Navbar from './Navbar'

const App = () => {
    const [fav,setFav]=useState([]);

    useEffect(() => {
    console.log(fav);
    }, [fav])

    const change=(data)=>{
        setFav((prev)=>{
            return [...prev,data];
        });
       
    }
    return ( <>
        <Navbar> </Navbar>
        <Switch>
        <Route exact path ="/contribute"><Contribute></Contribute></Route>
        <Route exact path ="/"><Home/></Route>
        <Route exact path ="/books"><Books change={change}/></Route>
        <Route exact path ="/favorites"><Favorites favBooks={fav}/></Route>
        <Redirect to = "/"/>
        </Switch> 

        </>
    )
}


export default App





