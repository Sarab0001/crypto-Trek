import './App.css';
import Homepage from '../src/Pages/Homepage';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
        <Outlet /> {/* Render child components of the current route */}
      </div>
    </BrowserRouter>
  );
}

export default App;
