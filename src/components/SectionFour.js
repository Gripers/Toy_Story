import React from "react";
import styled from "styled-components";
import bg from "../images/olen.png";

const SctFour = () => {
  return (
    <SctnerFour>
      <p>About the Shop</p>
      <h1>Watch Our Story</h1>
      <p>
        There is no magic formula to write perfect ad copy. It is based on a
        number of factors, including ad placement, <br /> demographic, even the
        consumer’s mood.
      </p>
      <div className="block">
        <i class="fas fa-play"></i>
      </div>
    </SctnerFour>
  );
};

const SctnerFour = styled.div`
  margin-top: 5%;
  background: url(${bg}) no-repeat center center/cover;
  width: 100%;
  height: 464px;
  text-align: center;
  padding-top: 5%;
  font-family: "Varela Round", sans-serif;
  font-size: 20px;
  line-height: 50px;
  color: white;
  .block {
    width: 64px;
    height: 64px;
    background-color: #a5c926;
    margin: 0 auto;
    margin-top: 1%;
    padding-top: 0.5%;
    cursor: pointer;
  }

  @media all and (max-width: 500px) {
    display: none;
  }
`;

export default SctFour;
