import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";
// import { Logout } from "./Components/Logout/Logout";
import { Register } from "./Components/Register/Register";
import { EditGame } from "./Components/EditGame/EditGame";
import { CreateGame } from "./Components/CreateGame/CreateGame";
import { Catalogue } from "./Components/Catalogue/Catalogue";

 
import "./App.css";

function App() {
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/edit" element={<EditGame />} />
          <Route path="/catalogue" element={<Catalogue />} />
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
