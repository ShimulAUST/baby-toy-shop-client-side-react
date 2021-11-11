import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { Dashboard, Payment, Reviews } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Navigation = () => {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink style={{ textDecoration: "none", color: 'white' }} to="/"><Button color="inherit">Baby Toys Shop</Button></NavLink>
                    </Typography>
                    <NavLink style={{ textDecoration: "none", color: 'white' }} to="/exploreShop"><Button color="inherit">Explore Shop</Button></NavLink>
                    {
                        user?.email ?
                            <Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="Account settings">
                                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                            <Avatar sx={{ width: 32, height: 32 }}></Avatar> <Typography sx={{ color: 'white' }}>{user.displayName}</Typography>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Dashboard fontSize="small" />
                                        </ListItemIcon>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <AddShoppingCartIcon fontSize="small" />
                                        </ListItemIcon>
                                        My Orders
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Payment fontSize="small" />
                                        </ListItemIcon>
                                        Payment
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Reviews fontSize="small" />
                                        </ListItemIcon>
                                        <Link to='/addReviews'> Add Review</Link>
                                    </MenuItem>
                                    <MenuItem onClick={logout}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>

                            :
                            <NavLink style={{ textDecoration: "none", color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;