import React from 'react'
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import Works from "./Works";
import Blog from "./Blog";
import Contact from "./Contact";

const Main = () => {
    return (
        <main className='main'>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/blog'} component={Blog} />
                <Route exact path={'/works'} component={Works} />
                <Route path={'/works/:id'} component={Works} />
                <Route exact path={'/contact'} component={Contact} />
            </Switch>
        </main>
    )
}

export default Main;
