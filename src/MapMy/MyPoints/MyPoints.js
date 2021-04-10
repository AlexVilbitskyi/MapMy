import React, { useState, useEffect } from 'react'
import { 
  Button, 
  Typography, 
  Container, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemSecondaryAction, 
  ListItemText, 
  IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import theme from '../../theme'
import { Link } from "react-router-dom"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './transition.css';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    title: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },
    list: {
      color: theme.palette.primary.main,
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      height: `calc(100vh - 200px)`,
      maxHeight: `calc(100vh - 200px)`
    },
    button: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    buttonText: {
      margin: 0,
      color: '#fff'
    },
    noPoints: {
      marginTop: 'calc(50vh - 122px)',
      marginBottom: 'calc(50vh - 122px)',
    }
}))

function MyPoints(props) {
    const classes = useStyles()

    const [fetchedPoints, setFetchedPoints] = useState([])
    useEffect(() => {
      (async () => {
        setFetchedPoints(await JSON.parse(localStorage.getItem('points')))
      })()
    }, [])

    const { selectPoint } = props
    useEffect(() => {
        selectPoint()
    }, [selectPoint])

    const handleToggle = (index) => async () => {
      const helpArr = [...fetchedPoints]
      helpArr[index].star = !helpArr[index].star
      await localStorage.setItem('points', JSON.stringify(helpArr))
      setFetchedPoints(helpArr)
    }

    const deletePoint = (id) => async () => {
      let helpArr = fetchedPoints.filter(item => item.id !== id)
      await localStorage.setItem('points', JSON.stringify(helpArr))
      setFetchedPoints(helpArr.length > 0 ? helpArr : null)
    }
    
    return (
      <Container maxWidth="sm">
        <Typography 
          component="h1" 
          variant="subtitle2" 
          align="left" 
          color="primary" 
          gutterBottom
          className={classes.title}
        >
          My Points
        </Typography>
        <List className={classes.list}>
          {fetchedPoints ? <Divider/> : null}
          <TransitionGroup>
            {fetchedPoints ? fetchedPoints.map((element) => {
              return (
                <CSSTransition
                  key={element.id}
                  timeout={500}
                  classNames="item"
                >
                  <ListItem 
                    key={element.id}
                    divider 
                    dense 
                  >
                    <ListItemIcon 
                      style={{ color: theme.palette.common.strongGreen }}
                      onClick={handleToggle(fetchedPoints.indexOf(element))}
                    >
                        { element.star ? <StarIcon /> : <StarBorderIcon />}
                    </ListItemIcon>
                    <ListItemText 
                      id={element.id} 
                      primary={element.name === 'Point' ? `Point ${element.helpNum}` : element.name}
                      secondary={
                        <Typography
                          component="span"
                          variant="subtitle2"
                          color="secondary"
                        >
                          lat: {element.lat}<br/>lng: {element.lng}
                        </Typography>
                      }                      
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="comments" onClick={deletePoint(element.id)}>
                        <CloseIcon style={{ color: theme.palette.common.lightGreen }}/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </CSSTransition>
              )
            }) : 
              <Typography 
                component="h1" 
                variant="subtitle1" 
                align="center" 
                color="primary" 
                className={classes.noPoints}
              >
                You haven't Points yet 🤔
              </Typography>
            }
          </TransitionGroup>
        </List>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth={true}
          className={classes.button}
          size="large"
        >
          <Link 
            to='/addpoint'
            style={{
              width: '100%',
              height: '100%',
              textDecoration: 'none'
            }}
          >
            <Typography
              variant='subtitle2'
              className={classes.buttonText}
              
            >
              ADD NEW POINT
            </Typography>
          </Link>
        </Button>
      </Container>
    )
}

export default MyPoints