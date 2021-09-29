import React from 'react'
import './style.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import {connect} from "react-redux";

const App = (props) => {
    return (
        <div>
            <Header  />
            <Main />
            <Footer />
        </div>
    )
}


const mapStateToProps = state =>{
    return {
        theme: state.theme
    }
}
export default connect(mapStateToProps)(App);
