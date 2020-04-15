import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <br></br>

      <Route path="/" exact component= {ExerciseList}></Route>
      <Route path="/edit/:id" exact component= {EditExercise}></Route>
      <Route path="/create" exact component= {CreateExercise}></Route>
      <Route path="/user" exact component= {CreateUser}></Route>
    </Router>

  );
}

export default App;
