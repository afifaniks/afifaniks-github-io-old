import "./App.css";
import React from "react";
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import ProfileView from "./components/Profile";
import PROFILE_DATA from "./statics/PROFILE_DATA";

function App() {
    return (
        <div className="App">
            <div className="container mt-3 mb-3">
                <div className="root">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<ProfileView profileData={PROFILE_DATA}/>} exact />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
