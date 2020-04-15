import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar'
import ExerciseList from './components/exercise-list'
import EditExercise from './components/edit-exercise'
import CreateExercise from './components/create-exercise'
import CreateUser from './components/create-user'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>
        <br></br>

        <Route path="/" exact component= {ExerciseList}></Route>
        <Route path="/edit/:id" exact component= {EditExercise}></Route>
        <Route path="/create" exact component= {CreateExercise}></Route>
        <Route path="/user" exact component= {CreateUser}></Route>
      </div>
    </Router>

  );
}

export default App;
