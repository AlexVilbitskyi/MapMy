import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { 
    Button, 
    Grid, 
    Typography, 
    Container, 
    Box,
    TextField,
    Fade,
    Backdrop,
    Modal
} from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../theme';
import Marker from '../Marker/Marker.js'
import usePoints from '../usePoints/usePoints.js'

const useStyles = makeStyles((theme) => ({
    mapContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: '100%',
        height: 'calc(100vh - 272px)', 
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4),
        maxWidth: '80vw'
    },
}));

const mapProps = {
    center: {
        lat: 49.8442411, 
        lng: 24.0263643
    },
    zoom: 11
};

function AddPoint(props) {
    const classes = useStyles();

    const { addPoint } = usePoints();
    const [coordinates, setCoordinates] = useState(null);
    const [pointName, setPointName] = useState('');
    const [openErrorModal, setOpenErrorModal] = useState(false);
    const [openFinishModal, setOpenFinishModal] = useState(false);

    const { setSelectedTab } = props;
    useEffect(() => {
        setSelectedTab('none');
    }, [setSelectedTab]);

    function addPointHandler() {
        if(!coordinates) {
            setOpenErrorModal(true)
            return null 
        } else {
            addPoint(coordinates, pointName, Date.now())()
        }

        setOpenFinishModal(true)
        setCoordinates(null)
        setPointName('')
    }

    return (
        <Container>
            <Typography 
                component="h1" 
                variant="subtitle2" 
                align="left" 
                color="primary" 
                gutterBottom
                className={classes.title}
            >
                Add Your New Point
            </Typography>
            <Box className={classes.mapContainer}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: 'AIzaSyBUUgZe-7xcqUmyoRvM4OnOwX-wj849dr1' }}
                    defaultCenter={mapProps.center}
                    defaultZoom={mapProps.zoom}
                    onClick={e => {
                        setCoordinates({
                            lat: e.lat,
                            lng: e.lng
                        })
                    }}
                >
                    {coordinates && 
                        <Marker
                            lat={coordinates.lat}
                            lng={coordinates.lng}
                        /> 
                    }  
                </GoogleMapReact>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Point name" 
                        variant="outlined" 
                        fullWidth
                        size='small'
                        value={pointName}
                        onChange={e => {
                            setPointName(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        fullWidth={true}
                        className={classes.button}
                        size="large"
                    >
                        <Link 
                            to='/'
                            style={{
                                width: '100%',
                                height: '100%',
                                textDecoration: 'none'
                            }}
                        >
                        <Typography
                            variant='subtitle2'
                            className={classes.buttonText}
                            style={{color: theme.palette.common.strongGreen}}
                        >
                            CANCEL
                        </Typography>
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth={true}
                        className={classes.button}
                        size="medium"
                        onClick={() => addPointHandler()}
                    >
                        ADD POINT
                    </Button>
                </Grid>
            </Grid>
            <Modal
                className={classes.modal}
                open={openErrorModal}
                onClose={() => setOpenErrorModal(false)}
                onClick={() => setOpenErrorModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openErrorModal}>
                    <div className={classes.paper}>
                        <Typography
                            variant="h6" 
                            align="center" 
                            color="primary" 
                        >
                            Please put a marker on the map and name Your new Point.
                        </Typography>
                    </div>
                </Fade>
            </Modal>
            <Modal
                className={classes.modal}
                open={openFinishModal}
                onClose={() => setOpenFinishModal(false)}
                onClick={() => setOpenFinishModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openFinishModal}>
                    <div className={classes.paper}>
                        <Typography
                            variant="h6" 
                            align="center" 
                            color="primary" 
                        >
                            New point added.
                        </Typography>
                    </div>
                </Fade>
            </Modal>
        </Container>
    );
}

export default AddPoint