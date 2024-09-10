import React from 'react';
import { useState } from 'react';
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// import LoginIcon from "@mui/icons-material/Login";
// import LogoutIcon from "@mui/icons-material/Logout";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  Login as LoginIcon,
  // Settings as SettingsIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { currentToken } from '../../redux/store';
import { JWTDecode } from '../../utils/JWTDecode';
import { logout, TUser } from '../../redux/features/auth/AuthSlice';
import { BiSolidCategory } from 'react-icons/bi';
import { BiKey } from 'react-icons/bi';
import { toast } from 'sonner';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon className="dark:text-white" />,
    path: '/dashboard/user',
  },
  {
    text: 'Rental Management',
    icon: <BiKey className="dark:text-white" />,
    children: [
      {
        text: 'My Rentals',
        icon: <BiKey className="dark:text-white" />,
        path: '/dashboard/user/my-rentals',
      },
    ],
  },
];

const adminMenuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon className="dark:text-white" />,
    path: '/dashboard/admin',
  },
  {
    text: 'User Management',
    icon: <PeopleIcon className="dark:text-white" />,
    children: [
      {
        text: 'All Users',
        icon: <PeopleIcon className="dark:text-white" />,
        path: '/dashboard/admin/all-users',
      },
    ],
  },
  {
    text: 'Types Management',
    icon: <BiSolidCategory className="dark:text-white" />,
    children: [
      {
        text: 'All Types',
        icon: <BiSolidCategory className="dark:text-white" />,
        path: '/dashboard/admin/all-types',
      },
      {
        text: 'Add Types',
        icon: <BiSolidCategory className="dark:text-white" />,
        path: '/dashboard/admin/create-type',
      },
    ],
  },
  {
    text: 'Bike Management',
    icon: <ElectricBikeIcon className="dark:text-white" />,
    children: [
      {
        text: 'All Bikes',
        icon: <ElectricBikeIcon className="dark:text-white" />,
        path: '/dashboard/admin/all-bikes',
      },
      {
        text: 'Add Bike',
        icon: <ElectricBikeIcon className="dark:text-white" />,
        path: '/dashboard/admin/create-bike',
      },
    ],
  },
  {
    text: 'Rental Management',
    icon: <BiKey className="dark:text-white" />,
    children: [
      {
        text: 'Rental Bikes',
        icon: <BiKey className="dark:text-white" />,
        path: '/dashboard/admin/rental-bikes',
      },
    ],
  },
];

export const Sidebar: React.FC = () => {
  const token = useAppSelector(currentToken);
  const [open, setOpen] = useState<boolean>(false);
  const [parentItem, setParentItems] = useState<string>('');
  const dispatch = useAppDispatch();
  let role;
  let menuItems;
  if (token) {
    const user = JWTDecode(token);
    role = (user as TUser)?.role;
  }

  if (role === 'user') {
    menuItems = userItems;
  } else {
    menuItems = adminMenuItems;
  }

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleSubMenu = (text: string) => {
    setParentItems(text);
  };

  // logout handler
  const logoutHandler = () => {
    if (token) {
      dispatch(logout());
      toast.success('Logout successfully!');
    }
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
          paper: 'w-64 bg-gray-900 text-white',
        }}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl font-bold">
            {' '}
            RentMy<span className="text-primary-500">Bike</span>
          </h1>
          <IconButton onClick={toggleSidebar}>
            <AiOutlineClose className="text-white" />
          </IconButton>
        </div>
        <List className="mt-4">
          {menuItems.map((item, index) => (
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
          <Link to={'/'}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon className="dark:text-white" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to={'/login'}>
            <ListItem button>
              <ListItemIcon>
                <LoginIcon className="dark:text-white" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>
          <ListItem button onClick={() => logoutHandler()}>
            <ListItemIcon>
              <LogoutIcon className="dark:text-white" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex bg-secondary-100 flex-col w-64 h-screen dark:bg-gray-800 dark:text-white fixed">
        <div className="px-4">
          <h1 className="text-2xl font-bold">
            RentMy<span className="text-primary-500">Bike</span>
          </h1>
        </div>
        <List className="mt-4">
          {menuItems.map((item, index) => (
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
          <Link to={'/'}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon className="dark:text-white" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to={'/login'}>
            <ListItem button>
              <ListItemIcon>
                <LoginIcon className="dark:text-white" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>
          <ListItem button onClick={() => logoutHandler()}>
            <ListItemIcon>
              <LogoutIcon className="dark:text-white" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </List>
      </div>
    </>
  );
};
