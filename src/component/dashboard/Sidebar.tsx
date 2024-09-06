import React from "react";
import { useState } from "react";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  // Settings as SettingsIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard/user" },
  {
    text: "Rental Management",
    icon: <PeopleIcon />,
    children: [
      {
        text: "My Rentals",
        icon: <PeopleIcon />,
        path: "/dashboard/user/my-rentals",
      },
    ],
  },
];

const adminMenuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard/admin" },
  {
    text: "User Management",
    icon: <PeopleIcon />,
    children: [
      {
        text: "All Users",
        icon: <PeopleIcon />,
        path: "/dashboard/admin/all-users",
      },
    ],
  },
  {
    text: "Bike Management",
    icon: <ElectricBikeIcon />,
    children: [
      {
        text: "All Bikes",
        icon: <ElectricBikeIcon />,
        path: "/dashboard/admin/all-bikes",
      },
      {
        text: "Add Bike",
        icon: <ElectricBikeIcon />,
        path: "/dashboard/admin/create-bike",
      },
    ],
  },
  {
    text: "Rental Management",
    icon: <ElectricBikeIcon />,
    children: [
      {
        text: "Rental Bikes",
        icon: <ElectricBikeIcon />,
        path: "/dashboard/admin/rental-bikes",
      },
    ],
  },
];

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [parentItem, setParentItems] = useState<string>("");

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleSubMenu = (text: string) => {
    setParentItems(text);
  };

  return (
    <>
      {/* Mobile View Menu Button */}
      <div className="block lg:hidden bg-secondary-100 w-full">
        <IconButton className="absolute left-4 z-50" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Drawer/Sidebar */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleSidebar}
        variant="temporary"
        className="lg:hidden"
        classes={{
          paper: "w-64 bg-gray-900 text-white",
        }}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl font-bold">
            {" "}
            RentMy<span className="text-primary-500">Bike</span>
          </h1>
          <IconButton onClick={toggleSidebar}>
            <AiOutlineClose className="text-white" />
          </IconButton>
        </div>
        <List className="mt-4">
          {adminMenuItems.map((item, index) => (
            <div key={item.text}>
              {!item.children ? (
                <Link to={item.path}>
                  <ListItem button key={index} className="hover:bg-gray-700">
                    <ListItemIcon className="text-white">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ) : (
                <div>
                  <div
                    onClick={() => toggleSubMenu(item.text)}
                    className="menu-item"
                  >
                    <ListItem button key={index} className="hover:bg-gray-700">
                      <ListItemIcon className="text-white">
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </div>
                  <Collapse
                    in={item.text === parentItem}
                    timeout="auto"
                    unmountOnExit
                  >
                    <div className="pl-4">
                      {item.children.map((subItem, index) => (
                        <Link to={subItem.path} key={index}>
                          <ListItem
                            button
                            key={index}
                            className="hover:bg-gray-700"
                          >
                            <ListItemIcon className="text-white">
                              {subItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={subItem.text} />
                          </ListItem>
                        </Link>
                      ))}
                    </div>
                  </Collapse>
                </div>
              )}
            </div>
          ))}
          <Divider />
          <Link to={"/"}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to={"/login"}>
            <ListItem button>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex bg-secondary-100 flex-col w-64 h-screen dark:bg-gray-900 dark:text-white fixed">
        <div className="px-4">
          <h1 className="text-2xl font-bold">
            RentMy<span className="text-primary-500">Bike</span>
          </h1>
        </div>
        <List className="mt-4">
          {adminMenuItems.map((item, index) => (
            <div key={item.text}>
              {!item.children ? (
                <Link to={item.path}>
                  <ListItem button key={index} className="hover:bg-gray-700">
                    <ListItemIcon className="text-white">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ) : (
                <div>
                  <div
                    onClick={() => toggleSubMenu(item.text)}
                    className="menu-item"
                  >
                    <ListItem button key={index} className="hover:bg-gray-700">
                      <ListItemIcon className="text-white">
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </div>
                  <Collapse
                    in={parentItem === item.text}
                    timeout="auto"
                    unmountOnExit
                  >
                    <div className="pl-4">
                      {item.children.map((subItem, index) => (
                        <Link to={subItem.path} key={index}>
                          <ListItem
                            button
                            key={index}
                            className="hover:bg-gray-700"
                          >
                            <ListItemIcon className="text-white">
                              {subItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={subItem.text} />
                          </ListItem>
                        </Link>
                      ))}
                    </div>
                  </Collapse>
                </div>
              )}
            </div>
          ))}
          <Divider />
          <Link to={"/"}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to={"/login"}>
            <ListItem button>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </List>
      </div>
    </>
  );
};
