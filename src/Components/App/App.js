
import './App.css';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import { Box } from "@mui/material";
const App = () =>{
  return (
    <Box className="App">
      <Header/>
      <MainPage/>
    </Box>
  );
}

export default App;
