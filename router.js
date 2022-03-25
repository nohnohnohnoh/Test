import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav" // 웹페이지에 페이지가 이동해도 고정 되어있는 부분
import Footer from "./components/footer/footer" // 웹페이지에 페이지가 이동해도 고정 되어있는 부분
import Loign from "./pages/Login/Login"
import Main from "./pages/Main/Main"

function Router () {
    <BrowserRouter>
    <Nav>
        <Footer>
            <Routes>
                <Route Path="/" element={<Login />}></Route>
                <Route Path="/Main" element{<Main />}></Route>
            </Routes>
        </Footer>
    </Nav>
    </BrowserRouter>
}

export default Router;