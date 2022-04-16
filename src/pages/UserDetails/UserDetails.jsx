import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserActions } from '../../redux/actions';
import { UserSelector } from '../../redux/selectors';
import { Wrapper } from './style';

export const UserDetails = () => {
  const dispatch = useDispatch()
  const { users, loading } = useSelector(UserSelector.selectUser);
  const { email } = useParams();
  const User = users.find(user => user.email == email);

  console.log(User);
  return (
    <>
      <Wrapper>
        <div>
          <h1> {`${User.name.title} ${User.name.first} ${User.name.last} `} </h1>
          <p> <span> Username :</span> {User.login.username} </p>
          <p> <span> Email :</span>  {User.email} </p>
          <p> <span> Cell :</span> {User.cell} </p>
          <p> <span> Phone :</span> {User.phone} </p>
          <p> <span> Gender :</span> {User.gender} </p>
          <p>
            <span> Address :</span>
            {`${User.location.city}, 
            ${User.location.state}, 
            ${User.location.country}, 
            ${User.location.street.name}, 
            ${User.location.street.number}`}
          </p>
        </div>
        <div>
          <img src={User.picture.large} alt={User.name.first} />
        </div>
      </Wrapper>
    </>
  )
}