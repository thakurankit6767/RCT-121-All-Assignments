import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import App from "./App";
import {AuthcontextProvider} from "./Context/AuthContext";
import RegistrationContextProvider from "./Context/RegistrationContextProvider"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthcontextProvider>
      <RegistrationContextProvider>
        <App />
      </RegistrationContextProvider>   
       
    </AuthcontextProvider>
    </BrowserRouter>
  </StrictMode>
);




