import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MarkerNormal from './Marker.png'
import MarkerSelected from './MarkerSelected.png'

const useStyles = makeStyles((theme) => ({
    pointName: {
        position: 'absolute',
        top: '100%',
        left: '50%',
        height: '30px',
        transform: 'translate(-50%, -100%)',
        maxWidth: '100px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        '&:hover': {
            zIndex: 1,
        },
    },
    marker: {
        position: 'absolute',
        top: '100%',
        left: '50%',
        width: '26px',
        height: '30px',
        transform: 'translate(-50%, -50%)',
        '&:hover': {
            zIndex: 1,
        }
    }
    
}));

function Marker (props) {
    const { text, selected } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography
                component="h1" 
                variant="caption" 
                align="left" 
                color="primary"
                className={classes.pointName}
            >
                {text}
            </Typography>
            <img 
                src={selected ? MarkerSelected : MarkerNormal}
                className={classes.marker}
                alt="Marker"
            >
            </img>
        </React.Fragment>
    )
}

export default Marker