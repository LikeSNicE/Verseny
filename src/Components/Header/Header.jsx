import { AppBar, Avatar, Box, styled, Toolbar,Typography } from '@mui/material';
import React from 'react';
import styles from './Header.module.scss';
import IconButton from "@mui/material/IconButton";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import { display } from '@mui/system';
import Logo from '../../assets/images/header/logo.svg';

const ToolBarStyled = styled(Toolbar)({
  background: '#fff',
  color: '#000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 300
})

const Icons = styled(Box)(({theme}) => ({
  
})
)

const BoxLinks = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const BoxLinksItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
}))

const Header = () => {
  return (
    <Box>
      <AppBar
        position="static"

      >
        <ToolBarStyled>
          <IconButton>
            {/* <CampaignIcon /> */}
            <Avatar src={Logo}>

            </Avatar>
          </IconButton>

          <BoxLinks className={styles.BoxLinks}>
            <BoxLinksItem className={styles.BoxLinksItem + " " + styles.BoxLinksItemActive}>
              <CampaignIcon />
              <Typography>Главная</Typography>
            </BoxLinksItem>
            <BoxLinksItem className={styles.BoxLinksItem}>
              <HomeIcon />
              <Typography>Мои конкурсы</Typography>
            </BoxLinksItem>
          </BoxLinks>

          <Icons>
            <Avatar
              src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"
              sx={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
              }}
            />
          </Icons>
        </ToolBarStyled>
      </AppBar>

      
    </Box>
  );
};

export default Header;