import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';

export const Home = (): ReactElement => {

    const [jsonData, setJsonData] = useState("");

        useEffect(() => {
        const url = '/api/example';
            axios.get(url).then((json) => {
                setJsonData(JSON.stringify(json.data));
            });
    }, []);


    return (
        <>
            <h1>This is an example app</h1>
            {jsonData}
        </>
    );
};


const App = (): ReactElement => {


    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"  component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
