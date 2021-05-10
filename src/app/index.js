import React from 'react';
import 'app/App.css';
// material ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// components
import Header from 'components/Header';
import CommentModal from "components/CommentModal";
import Comments from "components/Comments";

function App() {
  const theme = createMuiTheme({
    shadows: ["none"],
    palette: {
      primary: {
        main: "#00BCD4",
        contrastText: '#fff'
      },
      secondary: {
        main: "#f1f1f1",
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <Header />
        <CommentModal />
        <Comments />
      </>
    </MuiThemeProvider>
  );
}

export default App;
