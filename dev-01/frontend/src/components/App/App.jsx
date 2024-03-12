import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../../layout/Layout';
import FoodItem from '../FoodItem/FoodItem';

function App() {

  return (
    <>
     <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/category/:categoryId" component={FoodItem} />
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default App;
