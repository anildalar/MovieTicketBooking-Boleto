import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MovieGrid from './pages/MovieGrid';
import MovieDetails from './pages/MovieDetails';
import MovieTicketPlan from './pages/MovieTicketPlan';
import MovieSeatPlan from './pages/MovieSeatPlan';
import MovieCheckout from './pages/MovieCheckout';
import Popcorn from './pages/Popcorn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path="/movie-grid" element={<MovieGrid />}></Route>
          <Route path="/movie-details" element={<MovieDetails />}></Route>
          <Route path="/movie-ticket-plan" element={<MovieTicketPlan />}></Route>
          <Route path="/movie-seat-plan" element={<MovieSeatPlan />}></Route>
          <Route path="/movie-checkout" element={<MovieCheckout />}></Route>
          <Route path="/popcorn" element={<Popcorn />}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>

        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
