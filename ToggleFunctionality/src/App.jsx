import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ContextProvider } from "./Context";
import Login from "./Login";
import Register from "./Register";
import Home from "./home";
function App() {
  const [isDarkThemeEnable, setIsDarkThemeEnable] = useState(false);
  const toggleTheme = () => setIsDarkThemeEnable((prev) => !prev);
  return (
    <>
      <ContextProvider value={{ toggleTheme, isDarkThemeEnable }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
export default App;
