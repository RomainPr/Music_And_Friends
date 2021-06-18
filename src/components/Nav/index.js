import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ModalSignIn from 'src/containers/connectedModalSignIn';

import './styles.scss';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function Nav({ isAuthenticated, openModalSignIn }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Déconnexion</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <BookmarkRoundedIcon />
        </IconButton>
        <p>Favoris</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profil</p>
      </MenuItem>
    </Menu>
  );

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <ModalSignIn />
      {!isAuthenticated
        ? (
          <div className="navbar__content">
            <div className="navbar__content__left">
              <img src="" alt="Logo M&F" />
            </div>
            <div className="navbar__content__right">
              <Button
                className="navbar__content__right__buttons"
                color="primary"
                startIcon={<AccountCircleIcon />}
                onClick={openModalSignIn}
              >Se connecter
              </Button>
              <Button
                className="navbar__content__right__buttons"
                variant="contained"
                color="secondary"
              >
                Inscription
              </Button>
            </div>
          </div>
        ) : (
          <div className={classes.grow}>
            <AppBar position="static" className={classes.bg}>
              <Toolbar>
                <div className={classes.sectionMobile}>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={toggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                <div>
                  <img src="" alt="Logo M&F" />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <SearchRoundedIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <BookmarkRoundedIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <Drawer
              anchor="left"
              open={open}
              onClose={toggleDrawer}
            >
              <div className={classes.toolbar} />
              <Divider />
              <List className={classes.list}>
                {['Accueil', 'Recherche', 'Mes annonces', 'Mes messages', 'Mes groupes', 'Mes favoris', 'Mon profil', 'Déconnexion'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index === 0 && (
                      <HomeRoundedIcon />
                      )}
                      {index === 1 && (
                      <SearchRoundedIcon />
                      )}
                      {index === 2 && (
                      <HomeRoundedIcon />
                      )}
                      {index === 3 && (
                      <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                      </Badge>
                      )}
                      {index === 4 && (
                      <GroupRoundedIcon />
                      )}
                      {index === 5 && (
                      <BookmarkRoundedIcon />
                      )}
                      {index === 6 && (
                      <AccountCircleRoundedIcon />
                      )}
                      {index === 7 && (
                      <ExitToAppRoundedIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Drawer>
          </div>
        )}
    </div>
  );
}

Nav.propTypes = {
  isAuthenticated: PropTypes.string.isRequired,
  openModalSignIn: PropTypes.func.isRequired,
};

export default Nav;
