import React, { useEffect } from "react";
import "./css/showPrice.css";
import threelines from "../assets/threelines.png";
import { connect } from "react-redux";
import { fetchStocks } from "../actions/postActions";

function ShowPrice(props) {
  useEffect(() => {
    props.fetchStocks();
  }, []);
  let stock = [];

  if (props.stocks !== undefined) {
    stock = props.stocks.map((data) => (
      <div className="main1" key={data.scrip}>
        <div className="grid">
          <div className="image">
            <img src={threelines} width="100%" alt="ThreeLines" />
          </div>
        </div>
        <div className="grid">
          <div className="name">{data.scrip}</div>
          <div>
            {/* className=""> */}
            <span className="name" id="dollar">
              $
            </span>
            <span className="numberPrice">{data.price}</span>
          </div>
        </div>
      </div>
    ));
  }

  return <>{stock}</>;
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocksData,
  };
};

export default connect(mapStateToProps, { fetchStocks })(ShowPrice);
