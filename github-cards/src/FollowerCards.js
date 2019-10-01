import React from 'react';

import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  background: #e5e5e5;
  align-items: center;
  width: 20rem;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: .5rem;
  transition: 0.5s;
  color: black;
  &:hover {
    transform: scale(1.05);

`;


class FollowerCards extends React.Component {

    render() {

        return (
            <div className="card-parent">

                <StyledCard>
                    <h1>{this.props.followerinfo.login}</h1>
                    <h2>{this.props.followerinfo.url}</h2>
                    <img className="card-img" src={this.props.followerinfo.avatar_url} />
                </StyledCard>
            </div>


        )




    }
}

export default FollowerCards;