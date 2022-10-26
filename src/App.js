import "./App.css";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Home />
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
