import React, { useState, useCallback } from 'react';
import MyPoints from './MyPoints/MyPoints.js'
import Header from './Header/Header.js'
import {
  Switch,
  Route,
} from "react-router-dom";
import MyMaps from './MyMaps/MyMaps.js';
import AddPoint from './AddPoint/AddPoint.js';

function MapMy() {
    const [selectedTab, setSelectedTab] = useState(null);

    const selectPoint = useCallback(() => {
        setSelectedTab("Point");
    }, [setSelectedTab]);
    
    const selectMap = useCallback(() => {
        setSelectedTab("Map");
    }, [setSelectedTab]);

    const selectNone = useCallback(() => {
        setSelectedTab("none");
    }, [setSelectedTab]);

    return (
        <React.Fragment>
            <Header 
                selectedTab={selectedTab}
            />
            <Switch>
                <Route path="/map">
                    <MyMaps
                        selectMap={selectMap}
                    />
                </Route>
                <Route path="/addpoint">
                    <AddPoint 
                        selectNone={selectNone}
                    />
                </Route>
                <Route path="/">
                    <MyPoints 
                        selectPoint={selectPoint}
                    />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default MapMy;
