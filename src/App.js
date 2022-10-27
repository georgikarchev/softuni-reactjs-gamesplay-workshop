import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gameService from "./Services/gameService";

import Home from "./Components/Home";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";
// import { Logout } from "./Components/Logout/Logout";
import { Register } from "./Components/Register/Register";
import { EditGame } from "./Components/EditGame/EditGame";
import { CreateGame } from "./Components/CreateGame/CreateGame";
import { Catalogue } from "./Components/Catalogue/Catalogue";

 
import "./App.css";
import { GameDetails } from "./Components/GameDetails/GameDetails";

function App() {

  const [ games, setGames ] = useState([]);

  useEffect( () => {
    gameService.getAll()
      .then( result => {
        console.log(result);
        setGames(result);
      });
  }, []);


  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/catalogue" element={<Catalogue games={games} />} />
          <Route path="/catalogue/:gameId" element={<GameDetails />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/edit" element={<EditGame />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </main>

      {/* Home Page */}

      {/* Login Page ( Only for Guest users ) */}

      {/* Register Page ( Only for Guest users ) */}

      {/* Create Page ( Only for logged-in users ) */}

      {/* Edit Page ( Only for the creator )*/}

      {/*Details Page*/}

      {/* Catalogue */}
    </div>
  );
}

export default App;
