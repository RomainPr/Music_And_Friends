import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ModalSignIn from 'src/containers/connectedModalSignIn';
import ModalSignUp from 'src/containers/connectedModalSignUp';

import Logo from 'src/assets/Music&Friends.png';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  button: {
    backgroundColor: '#E87121',
    '&:hover': {
      backgroundColor: '#FDA13D',
    },
  },
  signIn: {
    margin: '15px',
    textTransform: 'none',
  },
  bg: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  navbar: {
    padding: '0',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
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

function Nav({
  isAuthenticated,
  anchorEl,
  open,
  isMenuOpen,
  handleLogout,
  openModalSignIn,
  openModalSignUp,
  handleProfileMenuOpen,
  handleMenuClose,
  toggleDrawer,
}) {
  const classes = useStyles();
  const role = localStorage.getItem('role');
  const id = localStorage.getItem('user');

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
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
      <MenuItem
        component={Link}
        to={`profil/${role}/${id}`}
        onClick={handleMenuClose}
      >
        Profil
      </MenuItem>
      <MenuItem onClick={handleLogout}>D??connexion</MenuItem>
    </Menu>
  );

  return (

    <div className="header__nav">
      <ModalSignIn />
      <ModalSignUp />
      {!isAuthenticated
        ? (
          <div className="navbar__content">
            <div className="navbar__content__left">
              <Link to="/">
                <img src={Logo} alt="Logo M&F" />
              </Link>
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
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={openModalSignUp}
              >
                Inscription
              </Button>
            </div>
          </div>
        ) : (
          <div className="navbar__content">
            <AppBar position="static" className={classes.bg}>
              <Toolbar className={classes.navbar}>
                <div className="navbar__content__left">
                  <Link to="/">
                    <img src={Logo} alt="Logo M&F" />
                  </Link>
                </div>
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
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton
                    title="Mes annonces"
                    color="inherit"
                    component={Link}
                    to={`/profil/${role}/${id}/myAds`}
                  >
                    <ImportContactsRoundedIcon />
                  </IconButton>
                  <IconButton title="Mes messages" color="inherit">
                    <Badge color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    title="Rechercher"
                    color="inherit"
                    component={Link}
                    to="/search"
                  >
                    <SearchRoundedIcon />
                  </IconButton>
                  <IconButton title="Mes favoris" color="inherit">
                    <BookmarkRoundedIcon />
                  </IconButton>
                  <IconButton
                    title="Mon compte"
                    edge="end"
                    aria-label="Mon compte"
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
            {renderMenu}
            <Drawer
              anchor="left"
              open={open}
              onClose={toggleDrawer}
            >
              <div className={classes.toolbar} />
              <Divider />
              <List className={classes.list}>
                <ListItem button onClick={toggleDrawer} component={Link} to="/">
                  <ListItemIcon>
                    <HomeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Accueil" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} component={Link} to="/search">
                  <ListItemIcon>
                    <SearchRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Recherche" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} component={Link} to={`/profil/${role}/${id}/myAds`}>
                  <ListItemIcon>
                    <HomeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mes annonces" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} component={Link} to="/">
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mes messages" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} component={Link} to="/">
                  <ListItemIcon>
                    <GroupRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mes groupes" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} component={Link} to="/">
                  <ListItemIcon>
                    <BookmarkRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mes favoris" />
                </ListItem>
                <ListItem button onClick={toggleDrawer} component={Link} to={`profil/${role}/${id}`}>
                  <ListItemIcon>
                    <AccountCircleRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mon profil" />
                </ListItem>
                <ListItem button onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToAppRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="D??connexion" />
                </ListItem>
              </List>
              <Divider />
            </Drawer>
          </div>
        )}
    </div>
  );
}

Nav.propTypes = {
  isAuthenticated: PropTypes.string,
  isMenuOpen: PropTypes.bool.isRequired,
  handleProfileMenuOpen: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  openModalSignIn: PropTypes.func.isRequired,
  openModalSignUp: PropTypes.func.isRequired,
  handleGetAnnounces: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  isAuthenticated: '',
};

export default Nav;
