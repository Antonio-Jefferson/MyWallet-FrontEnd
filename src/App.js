import {BrowserRouter, Routes, Route} from "react-router-dom"
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Home from "./pages/Home"
import NewEntrace from "./pages/NewEntrace"
import NewExit from "./pages/NewExit"
import GlobalStyled from "./GlobalStyled";
import styled from "styled-components";

export default function App() {
  return (
  <Conteiner>
    <BrowserRouter>
      <GlobalStyled/>
      <Routes>
        <Route path={"/"} element={<SingIn />}></Route>
        <Route path={"/cadastro"} element={<SingUp />}></Route>
        <Route path={"/home"} element={<Home/>}></Route>
        <Route path={"/nova-entrada"} element={<NewEntrace />}></Route>
        <Route path={"/nova-saida"} element={<NewExit />}></Route>
      </Routes>
    </BrowserRouter>
  </Conteiner>
  );
}
const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--primary);
  height: 100vh;
  
  `