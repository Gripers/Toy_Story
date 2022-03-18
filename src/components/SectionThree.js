import React from "react";
import styled from "styled-components";
import flower from "../images/flower.png";
import transport from "../images/transport.png";
import camera from "../images/camera.png";
import rabbit from "../images/rabbit.png";

const SctThree = () => {
  return (
    <SctnerThree>
      <h1 className="stuff">Stuffed Animals</h1>
      <div className="carcidon">
        <div className="carcidoner"></div>
      </div>
      <div className="cards">
        <div className="card">
          <img width={182} height={182} src={flower} alt="" />
          <p>Happy Flower</p>
          <button>$ 38.00 USD</button>
        </div>
        <div className="card">
          <img width={182} height={182} src={transport} alt="" />
          <p>Lift Machine</p>
          <button>$ 24.00 USD</button>
        </div>
        <div className="card">
          <img width={182} height={182} src={camera} alt="" />
          <p>Wooden Camera</p>
          <button>$ 32.00 USD</button>
        </div>
        <div className="card">
          <img width={182} height={182} src={rabbit} alt="" />
          <p>Little Rabbit</p>
          <button>$ 16.00 USD</button>
        </div>
      </div>
    </SctnerThree>
  );
};

const SctnerThree = styled.div`
  margin-top: 5%;

  .stuff {
    text-align: center;
    font-family: "Varela Round", sans-serif;
    font-weight: 100;
  }

  .cards {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    margin-top: 3% !important;
  }

  .card {
    width: 270px;
    height: 328px;
    border-radius: 16px;
    border: #ffffff;
    background-color: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    text-align: center;
    font-family: "Varela Round", sans-serif;
    line-height: 40px;
    button {
      cursor: pointer;
      color: white;
      width: 92px;
      height: 24px;
      border: #a5c926;
      border-radius: 16px;
      background-color: #a5c926;
    }
  }

  .carcidon {
    width: 1170px;
    height: 2px;
    background-color: #e5e5e5;
    margin: 0 auto;
    margin-top: 3% !important;
    .carcidoner {
      width: 136px;
      height: 2px;
      background-color: #a5c926;
    }
  }

  @media all and (max-width: 500px) {
    width: 100%;

    .stuff {
      width: 100%;
      text-align: center;
    }

    .carcidon {
      width: 100%;
    }

    .cards {
      width: 100%;
      display: block;
      .card {
        text-align: center;
        margin: 0 auto !important;
      }
    }
  }
`;

export default SctThree;
