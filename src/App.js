import React from "react";
import "./App.css";
import { Title, Logo, UserContainer, User } from "./components";

const App = () => {
    return (
        <div className="App">
            <header>
                <Logo>
                    <img
                        src="./OctoCatLogo.png"
                        className="App-logo"
                        alt="logo"
                    />
                    <Title>Github War</Title>
                </Logo>
            </header>
            <UserContainer>
                <User>user 1</User>
                <User>user 2</User>
            </UserContainer>
        </div>
    );
};

export default App;
