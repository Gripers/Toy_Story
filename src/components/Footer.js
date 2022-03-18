import React from "react";
import styled from "styled-components";

const Foot = () => {
  return (
    <Footak>
      <div className="footen">
        <div className="upper">
          <h1>ToyStore</h1>
          <div className="titlees">
            <p>Home</p>
            <p>Catalog</p>
            <p>Delivery</p>
            <p>About</p>
            <p>Contacts</p>
          </div>
          <div className="icons">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div className="downer">
          <p>Created with love by Elastic Themes</p>
          <div className="crusian">
            <p>Powered by Webflow</p>
            <ul>
              <li>Style Guide</li>
              <li>Licensing</li>
            </ul>
          </div>
        </div>
      </div>
    </Footak>
  );
};

const Footak = styled.div`
  .footen {
    margin-top: 5% !important;
    margin: 0 auto;
    width: 100%;
    height: 209px;
    background-color: #a5c926;
    padding: 3vh;
  }

  .upper {
    color: white;
    display: flex;
    justify-content: space-around;
    h1 {
      font-family: "Varela Round", sans-serif;
    }
    .titlees {
      display: flex;
      justify-content: space-around;
      width: 30%;
      padding-top: 1%;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-weight: 500;
    }
    .icons {
      display: flex;
      justify-content: space-around;
      width: 20%;
      padding-top: 1%;
    }
  }

  .downer {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 3%;
    color: white;
    display: flex;
    justify-content: space-around;
    .crusian {
      width: 50%;
      display: flex;
      justify-content: space-around;
      ul {
        width: 30%;
        display: flex;
        justify-content: space-around;
      }
    }
  }

  @media all and (max-width: 500px) {
    width: 100%;
    height: 100%;

    .footen {
      width: 100%;
      height: 100%;
      .upper {
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        .titlees {
          text-align: center;
          width: 100%;
          position: relative;
          padding-top: 5%;
        }
        .icons {
          width: 100%;
          height: 100%;
          position: relative;
          padding-top: 5%;
        }
      }
      .downer {
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        margin: 0 auto;
        line-height: 30px;
        .crusian {
          text-align: center;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          ul {
            display: none;
          }
        }
      }
    }
  }
`;

export default Foot;
