import React from "react";
import styled from "styled-components";
import bg from "../images/heroes.png";

const SctFive = () => {
  return (
    <SctnerFive>
      <div className="toper">
        <p>Made for Webflow</p>
        <h1>
          Simple & Colorful Ecommerce <br /> Template for Your Business
        </h1>
      </div>
      <div className="medium">
        <div className="left-block">
          <h1>Available for FREE!</h1>
          <div className="line"></div>
          <p>
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy
          </p>
          <button>GET IT NOW!</button>
        </div>
        <div className="right-block">
          <img width={567} height={422} src={bg} alt="" />
        </div>
      </div>
      <div className="bottomer">
        <div className="cardon">
          <div className="lefton">
            <div className="telegram-block">
              <i class="fab fa-telegram-plane fa-2x"></i>
            </div>
            <p>
              Subscribe to our newsletter <br /> & get{" "}
              <span>10% discount!</span>
            </p>
          </div>
          <div className="righton">
            <div className="btnone"></div>
            <div className="btntwo"></div>
          </div>
        </div>
      </div>
    </SctnerFive>
  );
};

const SctnerFive = styled.div`
  margin-top: 5% !important;
  margin: 0 auto;

  .toper {
    text-align: center;
    p {
      color: #a5c926;
      padding-bottom: 1%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    h1 {
      font-weight: 100;
      font-family: "Varela Round", sans-serif;
    }
  }

  .medium {
    margin-top: 5% !important;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    .left-block {
      width: 500px;
      height: 261px;
      padding-top: 5%;
      h1 {
        font-family: "Varela Round", sans-serif;
        font-weight: 100;
        padding-bottom: 5%;
      }
      .line {
        width: 70px;
        height: 2px;
        background-color: #a5c926;
        margin-bottom: 5%;
      }
      p {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        color: #999999;
        padding-bottom: 5%;
      }
      button {
        width: 145px;
        height: 48px;
        background-color: #a5c926;
        border: #a5c926;
        border-radius: 24px;
        color: white;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
    }
  }

  .cardon {
    background-color: white;
    margin-top: 5% !important;
    margin: 0 auto;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    display: flex;
    justify-content: space-around;
    padding: 3vh;
    width: 80%;
    .lefton {
      display: flex;
      justify-content: space-around;
      width: 25%;
      .telegram-block {
        width: 63px;
        height: 63px;
        background-color: #a5c926;
        text-align: center;
        padding-top: 5%;
        color: white;
      }
      p {
        padding-top: 3%;
        font-family: "Varela Round", sans-serif;
        span {
          color: #a5c926;
        }
      }
    }
    .righton {
      display: flex;
      justify-content: space-around;
      width: 50%;
      padding-top: 1%;
      .btnone {
        width: 376px;
        height: 47px;
        border-radius: 24px;
        background-color: #f8f8f8;
      }
      .btntwo {
        width: 121px;
        height: 47px;
        border: #a5c926;
        border-radius: 24px;
        background-color: #a5c926;
      }
    }
  }

  @media all and (max-width: 500px) {
    margin-top: 10% !important;

    .toper {
      width: 100%;
      text-align: center;
    }

    .medium {
      display: block;
      width: 100%;
      .line {
        margin: 0 auto;
      }
      .left-block {
        text-align: center;
        width: 90%;
        margin: 0 auto;
      }
    }

    .right-block img {
      padding-top: 5%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .bottomer {
    display: none;
  }
`;

export default SctFive;
