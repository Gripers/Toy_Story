import React from "react";
import styled from "styled-components";
import bear from "../images/bear.png";
import flower from "../images/flower.png";

const SctOne = () => {
  return (
    <SctnerOne>
      <div className="left-card">
        <img width={220} height={220} src={bear} alt="" />
        <div className="titler">
          <h1>Stuffed Animals</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="right-card">
        <div className="titleer">
          <h1>Wooden Toys</h1>
          <button>Shop Now</button>
        </div>
        <img width={220} height={220} src={flower} alt="" />
      </div>
    </SctnerOne>
  );
};

const SctnerOne = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10% !important;
  width: 80%;
  margin: 0 auto;

  .left-card {
    width: 570px;
    height: 188px;
    background-color: #ffc12c;
    border-radius: 16px;
    img {
      position: absolute;
      top: 112%;
    }
    .titler {
      padding-top: 5%;
      line-height: 60px;
    }
    h1 {
      position: relative;
      left: 45%;
      font-family: "Varela Round", sans-serif;
      color: white;
      font-weight: 100;
    }
    button {
      position: relative;
      left: 45%;
      width: 112px;
      height: 40px;
      border: white;
      background-color: white;
      color: black;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      border-radius: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .right-card {
    width: 570px;
    height: 188px;
    background-color: #fb416b;
    border-radius: 16px;
    display: flex;
    justify-content: space-around;
    img {
      position: absolute;
      left: 73%;
      top: 115%;
    }
    .titleer {
      padding-top: 5%;
      line-height: 60px;
    }
    h1 {
      font-family: "Varela Round", sans-serif;
      color: white;
      font-weight: 100;
      position: relative;
      right: 60%;
    }
    button {
      width: 112px;
      height: 40px;
      border: white;
      background-color: white;
      color: black;
      font-weight: bold;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      border-radius: 20px;
      position: relative;
      right: 15%;
      cursor: pointer;
    }
  }

  @media all and (max-width: 500px) {
    display: none;
  }
`;

export default SctOne;
