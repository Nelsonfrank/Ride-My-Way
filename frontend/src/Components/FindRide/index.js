import React from "react";
import "./style-ride.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import RideList from "./RideList";
import Navigation from "./Navigation";
import SearchRide from "./SearchRide";

const index = () => {
  return (
    <Router>
      <React.Fragment>
        <div className="whole-header">
          <Navigation />
          <div className="search-item">
            <SearchBar />
          </div>
        </div>

        <div className="side-bar">
          <ul className="option-list">
            <li className="list-item-ride">Dashboard</li>
            <li className="list-item-ride">FindRide</li>
            <li className="list-item-ride">OfferRide</li>
            <li className="list-item-ride">SignOut</li>
          </ul>
        </div>
        <div className="my-ride-found">
          <RideList />
        </div>
      </React.Fragment>
      <div>
        <Route path="/SearchRide" component={SearchRide} />
      </div>
    </Router>
  );
};
export default index;
