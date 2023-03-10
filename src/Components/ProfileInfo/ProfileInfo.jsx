import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tabs,
  Tab,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { tagsColors } from "../styles/vars-colors/varsColors";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

const BoxMainStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  mt: "20px",
  
});

const BoxMainLeft = styled(Box)({
  width: "300px",
  padding: "30px",
  background: "#F9F9F9",
  borderRadius: "10px",
});

const BoxMainRight = styled(Box)({
  width: "850px",
  borderRadius: "10px",
  background: '',
  marginLeft: '15px'
});

const BoxMainRightTop = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#F9F9F9",
  padding: "40px 15px",
  borderRadius: "10px",
  marginBottom: "15px",
  rowGap: '20px'
});

const BoxMainRightBottom = styled(Box)({
  marginTop: "15px",
  background: "#F9F9F9",
  padding: "30px 25px",
});

const TypographySearch = styled(Typography)({
  fontSize: '16px',
  margin: '15px 0'
})

const ProfileInfo = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};


  return (
    <BoxMainStyled
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
      }}
    >
      <BoxMainLeft>
        <Avatar
          src="https://i.pinimg.com/originals/90/09/79/900979ebb3fe7ed2b6c0436a67ef02c3.jpg"
          variant="square"
          sx={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            mb: "10px",
          }}
        ></Avatar>

        <Button
          variant="contained"
          component="label"
          sx={{
            background: tagsColors.four,
            mb: "40px",
          }}
        >
          <EditIcon />
          <input type="file" hidden />
        </Button>

        <TypographySearch
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
          variant="h6"
          component="div"
        >
          ???????????? ????????????????????
        </TypographySearch>

        <Divider />

        <List>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="?????? : ????????????" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="?????????????? : ??????????????" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="?????? : ??????????????" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="?????????? : bekkozha.ayan@mail.ru" />
          </ListItem>
        </List>
      </BoxMainLeft>

      <BoxMainRight>
        <BoxMainRightTop>
          <Box>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              ?????????????? ????????????
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#4A4A4E",
              }}
            >
              ???????? ???????????????? ????????????????: 10.01.2023
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#4A4A4E",
              }}
            >
              ????????: ??????????????????????
            </Typography>
          </Box>

          <Box>
            <Button
              startIcon={<ExitToAppIcon />}
              sx={{
                background: tagsColors.one,
                color: "#fff",
                transition: "all .8s",
                "&:hover": {
                  background: tagsColors.four,
                },
              }}
            >
              ??????????
            </Button>
          </Box>
        </BoxMainRightTop>

        <BoxMainRightBottom>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#5461A4",
              mb: "15px",
            }}
          >
            <SettingsApplicationsIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <Typography variant="h5" component={"span"}>
              ?????????????????? ????????????????
            </Typography>
          </Box>
          <Divider sx={{ background: "#5461A4" }} />

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
            textColor="#4A4A4E"
            indicatorColor="secondary"
          >
            <Tab
              icon={<EditIcon />}
              iconPosition="start"
              label="???????????????????????????? ??????????????"
            />
            <Tab
              icon={<DeleteIcon />}
              iconPosition="start"
              label="?????????????? ??????????????"
            />
          </Tabs>

          <TypographySearch variant="h6" component={"div"}>
            ??????
          </TypographySearch>
          <TextField fullWidth type="search" placeholder="??????"></TextField>

          <TypographySearch variant="h6" component={"div"}>
            ??????????????
          </TypographySearch>
          <TextField fullWidth type="search" placeholder="??????????????"></TextField>

          <TypographySearch variant="h6" component={"div"}>
            ??????????
          </TypographySearch>
          <TextField fullWidth type="search" placeholder="??????????"></TextField>

          <FormControl
            sx={{
              mt: "20px",
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">??????</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              row
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                value="??????????????"
                control={<Radio />}
                label="??????????????"
                sx={{
                  color: "#696969",
                }}
              />
              <FormControlLabel
                value="??????????????"
                control={<Radio />}
                label="??????????????"
              />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            sx={{
              display: "block",
              mt: "10px",
              background: "#9294C9",
              "&:hover": {
                background: "#9294C9",
              },
            }}
          >
            ??????????????????????????
          </Button>
        </BoxMainRightBottom>
      </BoxMainRight>
    </BoxMainStyled>
  );
};

export default ProfileInfo;
