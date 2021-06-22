import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Home from "./views/Home";
import AdPreviewFacebook from "./views/AdPreviewFacebook";
import AdPreviewTiktok from "./views/AdPreviewTiktok";
import AdPreviewGoogle from "./views/AdPreviewGoogle";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar/>

                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/ad-preview-facebook"} component={AdPreviewFacebook} />
                    <Route exact path={"/ad-preview-tiktok"} component={AdPreviewTiktok} />
                    <Route exact path={"/ad-preview-google"} component={AdPreviewGoogle} />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default App;