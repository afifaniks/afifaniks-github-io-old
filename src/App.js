import "./App.css";
import React from "react";
import ProfileView from "./components/Profile";
import PROFILE_DATA from "./statics/Data";

function App() {
    return (
        <div className="App">
            <div className="container mt-3 mb-3">
                <ProfileView profileData={PROFILE_DATA}/>
            </div>
        </div>
    );
}

export default App;
