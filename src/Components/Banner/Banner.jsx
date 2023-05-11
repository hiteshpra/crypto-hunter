import { Container, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles (() =>({
   banner:{
    backgroudImage: "url (./banner.jpg)",
   },
   bannerContent: {
    height:400,
    display:"flex",
    flexDirection:"column",
    paddingTop:25,
    justifyContent:"space-around",
   },
}));

const Banner = () => {

    const useStyles = makeStyles()
  return <div className={classes.Banner}>
    <Container className={classes.bannerContent}>
        <div className={classes.tagline}></div>
    </Container>
  </div>
}

export default Banner
