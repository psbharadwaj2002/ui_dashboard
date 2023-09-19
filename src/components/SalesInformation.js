import React from "react";
import "../styles/salesNotification/salesNotification.css";

function SalesInformation() {
  return (
    <div id="sales">
      <p>Sales Information</p>
      <div>
        <div className="search_by_type">
          <p>Customer</p>
          <input type="text" placeholder="Enter Customer name" />
        </div>

        <div className="search_by_type">
          <p>Invoice ID</p>
          <input type="text" placeholder="Enter Invoice Id" />
        </div>

        <div className="search_by_type">
          <p>Start Date</p>
          <input type="text" placeholder="Start Date" />
        </div>

        <div className="search_by_type">
          <p>End Date</p>
          <input type="text" placeholder="End Date" />
        </div>
      </div>
    </div>
  );
}

export default SalesInformation;
