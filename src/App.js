import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Gmail from './Pages/Gmail';
import Images from './Pages/Images';
import Store from './Pages/Store';
import {Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <>
    <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/store" component={Store}/>
        <Route path="/gmail" component={Gmail}/>
        <Route path="/images" component={Images}/>
      </Switch>
    </>
  );
}

export default App;
