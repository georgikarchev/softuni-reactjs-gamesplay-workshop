import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import uniqid from "uniqid";

import * as gameService from "./Services/gameService";

import Home from "./Components/Home";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";
// import { Logout } from "./Components/Logout/Logout";
import { EditGame } from "./Components/EditGame/EditGame";
import { CreateGame } from "./Components/CreateGame/CreateGame";
import { Catalogue } from "./Components/Catalogue/Catalogue";

import "./App.css";
import { GameDetails } from "./Components/GameDetails/GameDetails";


// Register component is being lazy loaded
// In order for the lazy loading to work the component needs to be exported as default !
// import Register from "./Components/Register/Register";
const Register = React.lazy(() => import("./Components/Register/Register"));


function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const addComment = (gameId, comment) => {
    setGames((state) => {
      const game = state.find((x) => x._id == gameId);
      const comments = game.comments || [];
      comments.push(comment);

      // immutable !!!
      return [...state.filter((x) => x._id !== gameId), { ...game, comments }];
    });
  };

  const addGameHandler = (gameData) => {
    setGames((state) => {
      return [
        ...state,
        {
          ...gameData,
          _id: uniqid(),
        },
      ];
    });
    navigate("/catalogue");
  };

  useEffect(() => {
    gameService.getAll().then((result) => {
      // console.log(result);
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
          <Route
            path="/catalogue/:gameId"
            element={<GameDetails games={games} addComment={addComment} />}
          />
          <Route
            path="/create"
            element={<CreateGame addGameHandler={addGameHandler} />}
          />
          <Route path="/edit" element={<EditGame />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route
            path="/register"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <Register />
              </Suspense>
            }
          />
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
