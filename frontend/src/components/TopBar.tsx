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
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getUser, logoutUser } from "../store/features/auth/slice";
import { useAppDispatch } from "../store/store";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

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
          <Logo />
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
            <NavLink
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
              style={{
                minWidth: 100,
                fontSize: 18,
                fontWeight: 600,
                color: "#335c6e",
                textTransform: "none",
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                minWidth: 100,
                fontSize: 18,
                fontWeight: 600,
                color: "#335c6e",
                textTransform: "none",
              }}
              to="/students"
            >
              Students
            </NavLink>
          </div>
        </div>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <StyledAvatar
            sx={{ width: 48, height: 48 }}
            alt={user?.name}
            src={user?.picture}
          />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          {/* <Avatar alt={user?.name} src={user?.picture} />{" "} */}
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
