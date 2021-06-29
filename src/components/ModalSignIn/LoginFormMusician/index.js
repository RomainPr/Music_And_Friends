import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './styles.scss';

const LoginFormMusician = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <div className="loginForm">
      <Avatar id="loginForm__avatar">
        <LockOutlinedIcon />
      </Avatar>
      <h2 className="loginForm__title">Connexion</h2>
      <form
        onSubmit={handleSubmit}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={onChangeEmail}
          id="email"
          label="Email Address"
          name="email"
          value={email}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={onChangePassword}
          name="password"
          label="Password"
          type="password"
          value={password}
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          id="loginSubmit"
          onClick={handleLogin}
        >
          Connexion
        </Button>
      </form>
    </div>
  );
};

LoginFormMusician.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginFormMusician;
