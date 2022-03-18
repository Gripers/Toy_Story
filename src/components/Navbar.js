import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navik>
      <div className="container">
        <div className="left-part">
          <h1>ToyStore</h1>
          <div className="titles">
            <p>Catalog</p>
            <p>Delivery</p>
            <p>About</p>
            <p>Contacts</p>
          </div>
        </div>
        <div className="right-part">
          <p>Cart</p>
          <i class="fal fa-shopping-cart"></i>
          <div className="circle">0</div>
        </div>
      </div>
    </Navik>
  );
};

const Navik = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

  .container {
    display: flex;
    justify-content: space-between;
    padding: 3vh;
  }

  .left-part {
    width: 50%;
    display: flex;
    justify-content: space-around;
    .titles {
      display: flex;
      justify-content: space-around;
      width: 60%;
      padding-top: 1.5%;
    }
  }

  .right-part {
    width: 10%;
    display: flex;
    justify-content: space-around;
    padding-top: 1%;
  }

  h1 {
    font-family: "Varela Round", sans-serif;
  }

  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    font-weight: bold;
  }

  i {
    font-weight: bold;
    font-size: 20px;
  }

  .circle {
    text-align: center;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #a5c926;
  }

  @media all and (max-width: 500px) {
    width: 100%;
    .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .left-part {
        width: 100%;
        h1 {
          display: none;
        }
        .titles {
          display: flex;
          justify-content: space-around;
          width: 100% !important;
        }
      }
    }
    .right-part {
      display: none;
    }
  }
`;

export default Nav;
