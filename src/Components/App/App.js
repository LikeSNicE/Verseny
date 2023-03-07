
import './App.css';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import { Box, Container } from "@mui/material";
import ProfileInfo from '../ProfileInfo/ProfileInfo';
const App = () =>{
  return (
    <Box>
      <Header />
      {/* <MainPage/> */}
      <Container maxWidth={'lg'}>
        <ProfileInfo />
      </Container>
    </Box>
  );
}

export default App;
