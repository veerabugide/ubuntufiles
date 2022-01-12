import logo from './logo.svg';
import './App.css';
import Students from './components/students';
import Poststd from './components/poststudents';
import Home from './components/home';
import { Link,BrowserRouter as Router, Route,Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <h1>React Router</h1>
        <ul class='Link' type='none'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/save'}>Add Students</Link></li>
          <li><Link to={'/student'}>View Students</Link></li>
        </ul>
        <hr></hr>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/save' component={Poststd}/>
          <Route exact path='/student' component={Students}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//     <div className="App">
// {/*       
//       <h1>Hello everyone</h1> */}
//       {/* <Poststd></Poststd>
//       <hr></hr>
//       <Students></Students>
//         <hr></hr> */}
//         <Home></Home>

//     </div>