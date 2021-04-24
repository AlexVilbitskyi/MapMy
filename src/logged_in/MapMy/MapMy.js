import React, { useState, memo } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import MyMaps from './MyMaps/MyMaps.js';
import AddPoint from './AddPoint/AddPoint.js';
import MyPoints from './MyPoints/MyPoints.js'
import Header from './Header/Header.js'

function MapMy() {
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        <React.Fragment>
            <Header 
                selectedTab={selectedTab}
            />
            <Switch>
                <Route path="/map">
                    <MyMaps
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/addpoint">
                    <AddPoint 
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/">
                    <MyPoints 
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default memo(MapMy)
