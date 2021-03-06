import react, {useState} from 'react'
import {AppBar, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import reactdom from 'react-dom'
import logo from './logo.svg';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';

import MainLayout from "./components/main-layout/main-layout";
import Header from "./components/header/header";
import NavDrawer from "./components/nav-drawer/nav-drawer";
import Footer from "./components/main-layout/Footer/footer";
import * as React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavDrawer></NavDrawer>
            <MainLayout></MainLayout>
            <Button variant="contained">burger menu</Button>
            <Footer></Footer>
        </div>
    );
}

export default App;
