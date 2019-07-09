import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const navbar = props => {
  return (
    <div className='navbar-container'>
      <p className='copyright'>@2019 Ken Atienza</p>
      <p className='welcome-sign'>Welcome, {props.username}</p>
      <button className='userlist-btn' onClick={(() => props.history.push('/usersList'))}>See all users</button>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.user.username,
});

export default withRouter(connect(mapStateToProps)(navbar));