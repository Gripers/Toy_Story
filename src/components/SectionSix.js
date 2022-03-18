import React from "react";
import styled from "styled-components";
import stickman from "../images/stickman.png";
import figure from "../images/figure.png";
import bardon from "../images/bardon.png";
import white from "../images/white.png";
import stars from "../images/stars.png";
import moneyken from "../images/monkey.png";

const SctSix = () => {
  return (
    <SctnerSix>
      <div className="toper">
        <p>@ElasticThemes</p>
        <h1>We're on Instagram!</h1>
      </div>
      <div className="imageer">
        <img width={172} height={172} src={stickman} alt="" />
        <img width={172} height={172} src={figure} alt="" />
        <img width={172} height={172} src={bardon} alt="" />
        <img width={172} height={172} src={white} alt="" />
        <img width={172} height={172} src={stars} alt="" />
        <img width={172} height={172} src={moneyken} alt="" />
      </div>
      <button>See More Photos</button>
    </SctnerSix>
  );
};

const SctnerSix = styled.div`
  margin-top: 5% !important;
  margin: 0 auto;

  .toper {
    text-align: center;
    p {
      color: #a5c926;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      padding-bottom: 1%;
    }
    h1 {
      font-family: "Varela Round", sans-serif;
      font-weight: 100;
    }
  }

  .imageer {
    margin: 0 auto;
    margin-top: 5% !important;
    text-align: center;
    display: flex;
    justify-content: space-around;
    width: 80%;
  }

  button {
    width: 173px;
    height: 48px;
    border: #a5c926;
    border-radius: 24px;
    background-color: #a5c926;
    color: white;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    text-align: center;
    position: relative;
    margin-top: 3%;
    left: 45%;
    cursor: pointer;
  }

  @media all and (max-width: 500px) {
    margin-top: 10% !important;
    margin: 0 auto;

    .toper {
      width: 100%;
      line-height: 30px;
    }

    .imageer {
      display: block;
      width: 100%;
    }

    button {
      position: relative;
      left: 27%;
    }
  }
`;

export default SctSix;
