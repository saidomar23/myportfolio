import React, { Component } from 'react';
import '../App/App.css'
// import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff6d00',
      },
      secondary: {
        main: '#1a237e',
      },
    },
  })

class Header extends Component {
    render(){
        return(
            <MuiThemeProvider theme={theme}>
            {/* <AppBar className="navbar" color='primary'> */}
            <header className='App-header'>
            <h1 className='nameHeading'>Said Omar</h1>
            <img src="https://avatars2.githubusercontent.com/u/42628416?s=400&u=852a2651acdbd852fd1503a57bfe131032311531&v=4" alt="profile pic"/>
            </header>
            {/* </AppBar> */}
            </MuiThemeProvider>
        )
    }
}


export default Header;