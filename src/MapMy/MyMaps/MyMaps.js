import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { 
    Container, 
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Marker from '../Marker/Marker.js'

const useStyles = makeStyles((theme) => ({
    mapContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: '100%',
        height: 'calc(100vh - 148px)', 
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
}));

const mapProps = {
    center: {
        lat: 49.8442411, 
        lng: 24.0263643
    },
    zoom: 11
};
 
function MyMaps(props) {
    const [fetchedPoints, setFetchedPoints] = useState([])
    useEffect(() => {
      (async () => {
        setFetchedPoints(await JSON.parse(localStorage.getItem('points')))
      })()
    }, [])

    const { selectMap } = props;
        useEffect(() => {
            selectMap();
        }, [selectMap]);
    const classes = useStyles();
 
    return (
        <Container className={classes.mapContainer}>
            <Typography 
                component="h1" 
                variant="subtitle2"
                align="left" 
                color="primary" 
                gutterBottom
                className={classes.title}
            >
              Map
            </Typography>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: 'AIzaSyBUUgZe-7xcqUmyoRvM4OnOwX-wj849dr1' }}
                defaultCenter={mapProps.center}
                defaultZoom={mapProps.zoom}
            >
                { fetchedPoints || Array.isArray(fetchedPoints) > 0 ? fetchedPoints.map((element) => {
                return (
                    <Marker
                        key={element.id}
                        lat={element.lat}
                        lng={element.lng}
                        text={element.name === 'Point' ? `${element.name} ${element.helpNum}` : element.name }
                        selected={element.star}
                    />)}
                ) : null } 
            </GoogleMapReact>
        </Container>
    );
}
 
export default MyMaps;