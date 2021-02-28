import React,{useEffect} from 'react'
import './App.css';
import {useDispatch} from 'react-redux'
import {getColleges} from './actions/colleges'
import {getStudents} from './actions/students'

import Colleges from './components/colleges/Colleges'
import {Route,Switch,Redirect} from 'react-router-dom'
import Students from './components/students/Students'
import Header from './Header/Header'


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getColleges());
    dispatch(getStudents());
    
  },[getColleges,getStudents]);

 

  return (
    <div className="App">
      <Header />
      <Switch>
         <Route exact path="/college" render={() =>(
             <Colleges />
          )} />
           <Route path="/college/:id" render={() =>(
             <Students />
          )} />
      </Switch>
     
      
    </div>
  );
}

export default App;
