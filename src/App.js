import './App.css'
import Template from './Template';
import Thankyou from './Thankyou';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [ rating, setRating ] = useState(0)

    const clickButton = (e) => {
        setRating(e.target.value)
    }
  return (
    <Router >
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Template clickButton={clickButton}/>
        </Route>
        <Route path="/thankyou">
          <Thankyou  rating={rating}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
