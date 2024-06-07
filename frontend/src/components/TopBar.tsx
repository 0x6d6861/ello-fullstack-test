import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getUser, logoutUser } from "../store/features/auth/slice";
import { useAppDispatch } from "../store/store";
import ello_logo from "../assets/logo/ello.svg";

function TopBar(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector(getUser);
  const dispatch = useAppDispatch();

  const processLogout = () => {
    dispatch(logoutUser());
    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "row",
          gap: 2,
          width: "100%",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <img style={{ height: 40 }} src={ello_logo} />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 18,
            }}
          >
            <Button
              sx={{
                minWidth: 100,
                fontSize: 18,
                fontWeight: 600,
                color: "#335c6e",
                textTransform: "none",
              }}
              variant="text"
            >
              Home
            </Button>
            <Button
              sx={{
                minWidth: 100,
                fontSize: 18,
                fontWeight: 600,
                color: "#335c6e",
                textTransform: "none",
              }}
              variant="text"
            >
              Students
            </Button>
          </div>
        </div>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 48, height: 48 }}
              alt={user?.name}
              src={user?.picture}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar alt={user?.name} src={user?.picture} />{" "}
          <div>
            <Typography variant="subtitle2" gutterBottom>
              {user?.name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {user?.email}
            </Typography>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={processLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default TopBar;
