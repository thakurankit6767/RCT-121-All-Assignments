import AllRoutes from "./Pages/AllRoutes";
import "./styles.css";
import AuthContextProvider from "./Context/AuthContext";

export default function App() {
  
  return (
    <div className="App">
     <AuthContextProvider/>
      <AllRoutes/>
    </div>
  );
}






