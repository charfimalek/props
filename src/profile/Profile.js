
import React from 'react'
import PropTypes from 'prop-types';
const Profile = props =>{
    return (
        <>
        <p>{props.Name}</p>
        <p>{props.profession}</p>
        <img src={props.children} />
        {props.AlertName(props.Name)}
        </>
    );
  }
  Profile.defaultProps = {Name:'flen ben foulen'}
  Profile.propTypes = {Name: PropTypes.string}
  export default Profile;