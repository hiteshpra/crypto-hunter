import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { CryptoState } from '../Cryptocontext'
const useStyles = makeStyles(() =>({
  title:{
    flex:1,
    color:"gold",
    fontFamily:"Montserrant",
    fontWeight:"bold",
    cursor:"pointer",

  }
}))

const Header = () => {
  const Classes = useStyles();
  const history = useNavigate();
  const { currancy,setcurrancy } = CryptoState();
  console.log(currancy)
  const darkTheme = createTheme({
    palette:{
      primary:{
        main:"#fff",
      },
      type:"dark",
    }
  })

  return (
      <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={()=> history.push("/")}
             className={Classes.title}
             variant='h6'>Crypto Hunter</Typography>
            <Select variant='outlined' style={{
              width:100,
              height:40,
              marginRight:15,
            }} value={currancy}
            onChange={(e) => setcurrancy(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>

            </Select>
          </Toolbar>
        </Container>

      </AppBar>
      </ThemeProvider>
  
  )
}

export default Header
