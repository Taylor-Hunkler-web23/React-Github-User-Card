import React from 'react';

import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  background: #e5e5e5;
  align-items: center;
  width:20rem;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: .8rem;
  transition: 0.5s;
  color: black;
  &:hover {
    transform: scale(1.05);

`;




class UserCards extends React.Component {

    render() {
        return (
            <div className="card-parent">
                <StyledCard>


                    <h1>{this.props.userinfo.name}</h1>
                    <h2> Username: {this.props.userinfo.login}</h2>
                    <h2>Location: {this.props.userinfo.location}</h2>
                    <h2>Number of followers: {this.props.userinfo.followers}</h2>
                    <img className="card-img" src={this.props.userinfo.avatar_url} />
                </StyledCard>
            </div>



        )
    }
}

export default UserCards;