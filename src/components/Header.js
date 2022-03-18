import React from "react";
import styled from "styled-components";
import bg from "../images/IMAGE.png";

const Headerick = () => {
  return (
    <Headericker>
      <div className="card">
        <p>Say Hello to ToyStore!</p>
        <h1>
          Free Ecommerce <br /> Template for Webflow
        </h1>
        <button>Open Catalog</button>
      </div>
    </Headericker>
  );
};

const Headericker = styled.div`
  background: url(${bg}) no-repeat center center/cover;
  width: 100%;
  height: 640px;
  padding-top: 10%;

  .card {
    width: 570px;
    height: 308px;
    background-color: white;
    text-align: center;
    padding-top: 3%;
    margin: 0 auto;
    border-radius: 16px;
    p {
      color: #a5c926;
      padding-bottom: 3%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    h1 {
      font-family: "Varela Round", sans-serif;
      font-weight: 100;
      padding-bottom: 5%;
    }
    button {
      width: 153px;
      height: 48px;
      border-radius: 24px;
      border: #a5c926;
      background-color: #a5c926;
      color: white;
      cursor: pointer;
    }
  }

  @media all and (max-width: 500px) {
    display: none;
  }
`;

export default Headerick;
