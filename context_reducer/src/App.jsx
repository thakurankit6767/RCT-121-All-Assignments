import "./App.css";
// import AppContextProvider from "./AppContext/AppContextProvider";
// import Button from "./AppContext/Button";
// import ToggleButton from "./AppContext/ToggleButton";
// import Counter from "./Counter/Counter";
// import GitHub from "./GitHub/GitHub";
import AllRoutes from "./Routing/AllRoutes"

function App() {
  return (
    <div className="App">
      <h1>ToggleTheme</h1>
      {/* <AppContextProvider />
      <Button text="THEME" />
      <ToggleButton />
      <Counter/>
      <GitHub/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
