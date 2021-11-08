// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SliderImages from "./Components/SliderImages.js"
import CardsSlider from './Components/CardsSlider'
import Premieres from './Components/Premieres'
import Footer from './Components/Footer'
// import AllMovies from './Components/AllMovies'
import AllMoviesMongo from './Components/AllMoviesMongo';
// import SingleMovie from './Components/SingleMovie'
import SingleMovieMongo from './Components/SingleMovieMongo';
import Registration from './Components/Registration';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/movies">
            {/* <AllMovies /> */}
            <AllMoviesMongo />
          </Route>
          <Route exact path="/">
            <SliderImages />
            <CardsSlider />
            <Premieres />
          </Route>
          <Route exact path="/movies/:movid">
            {/* <SingleMovie /> */}
            <SingleMovieMongo />
          </Route>

          <Route exact path="/registration">
            <Registration />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
