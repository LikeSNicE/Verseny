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
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { tagsColors } from "../styles/vars-colors/varsColors";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

const ProfileInfo = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
      }}
    >
      <Box
        sx={{
          width: "300px",
          padding: "30px",
          background: "#F9F9F9",
          borderRadius: "20px",
        }}
      >
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
        {/* <TextField
          sx={{
            background: tagsColors.four,
            mb: "40px",
          }}
        >
          <EditIcon />
        </TextField> */}
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

        <Typography variant="h6" component="div">
          Личная Информация
        </Typography>

        <Divider />

        <List>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="Имя : Никита" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="Фамилия : Луценко" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="Пол : Мужской" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary="Почта : bekkozha.ayan@mail.ru" />
          </ListItem>
        </List>
      </Box>

      <Box
        sx={{
          width: "850px",
          ml: "35px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#F9F9F9",
            padding: "40px 15px",
            borderRadius: "10px",
            mb: "15px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              Луценко Никита
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#4A4A4E",
              }}
            >
              Дата создание аккаунта: 10.01.2023
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#4A4A4E",
              }}
            >
              Роль: Организатор
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
              Выйти
            </Button>
          </Box>
        </Box>

        <Box>
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
              Настроика аккаунта
            </Typography>
          </Box>
          <Divider />

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
              label="Редактирования профиля"
            />
            <Tab
              icon={<DeleteIcon />}
              iconPosition="start"
              label="Удалить аккаунт"
            />
          </Tabs>

          <Typography variant="h6" component={"div"}>
            Имя
          </Typography>
          <TextField fullWidth type="search" placeholder="Имя"></TextField>

          <Typography variant="h6" component={"div"}>
            Фамилия
          </Typography>
          <TextField fullWidth type="search" placeholder="Фамилия"></TextField>

          <Typography variant="h6" component={"div"}>
            Почта
          </Typography>
          <TextField fullWidth type="search" placeholder="Почта"></TextField>

          <FormControl
            sx={{
              mt: "20px",
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">Пол</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              row
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                value="Женский"
                control={<Radio />}
                label="Женский"
              />
              <FormControlLabel
                value="Мужской"
                control={<Radio />}
                label="Мужской"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
