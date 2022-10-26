import { Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
// import { Logout } from "./Components/Logout/Logout";
import { Register } from "./Components/Register/Register";
import { Edit } from "./Components/Edit/Edit";
import { Create } from "./Components/Create/Create";
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
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
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
