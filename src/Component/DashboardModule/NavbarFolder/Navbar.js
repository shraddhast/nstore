import React, { useState } from 'react'
import { AppBar, Toolbar,Typography,Button,MenuItem,Menu} from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import NavbarStyles from './NavbarStyles'

function Navbar() {
    const classes = NavbarStyles()
    const [dropdown, setDropdown] = useState(null)
    const handleClick = (event) => {
        setDropdown(event.currentTarget);
      };
    const handleClose = () => {
        setDropdown(null);
      };
    return (
        <div>
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.neoStore}>
                     Neo
                     <span className={classes.store}>STORE</span>
                    </Typography>

                    <Typography variant="button" className={classes.button}>
                        <Button color="inherit" >Home</Button>
                        <Button color="inherit" >Products</Button>
                        <Button color="inherit">Orders</Button>
                    </Typography>

                    <InputBase placeholder="Search…"
                    startAdornment={<SearchIcon/>}
                    className={classes.inputBase}/>

                    <Button className={classes.buttonCart}
                        startIcon={<ShoppingCartIcon />}>Cart</Button>

                    <Button className={classes.buttonProfile} onClick={handleClick}
                        startIcon={<AccountBoxIcon/>} endIcon={<KeyboardArrowDownIcon/>}></Button>
                     <Menu id="simple-menu"
                                anchorEl={dropdown}
                                keepMounted
                                open={Boolean(dropdown)}
                                onClose={handleClose} >
                                <MenuItem>Login</MenuItem>
                                <MenuItem>Register</MenuItem>
                            </Menu>

                </Toolbar>
            </AppBar>
        </div>
        </div>
    )
}

export default Navbar
