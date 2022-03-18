import React from "react";
import styled from "styled-components";
import bear from "../images/bear.png";
import mutant from "../images/mutant.png";
import doggy from "../images/doggy.png";
import foxy from "../images/foxy.png";

const SctTwo = () => {
  return (
    <SctnerTwo>
      <h1 className="stuff">Stuffed Animals</h1>
      <div className="carcidon">
        <div className="carcidoner"></div>
      </div>
      <div className="cards">
        <div className="card">
          <img width={182} height={182} src={bear} alt="" />
          <p>Teddy Bear</p>
          <button>$ 30.00 USD</button>
        </div>
        <div className="card">
          <img width={182} height={182} src={mutant} alt="" />
          <p>Mega Plush Toy</p>
          <button>$ 38.00 USD</button>
        </div>
        <div className="card">
          <img width={182} height={182} src={doggy} alt="" />
          <p>Cute Dog</p>
          <button>$ 24.00 USD</button>
        </div>
        <div className="card">
          <img width={182} height={182} src={foxy} alt="" />
          <p>Little Friend</p>
          <button>$ 27.00 USD</button>
        </div>
      </div>
    </SctnerTwo>
  );
};

const SctnerTwo = styled.div`
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

export default SctTwo;
