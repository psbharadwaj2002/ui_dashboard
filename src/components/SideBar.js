import React from "react";
import "../styles/sideBar/styleBar.css";
// IMPORTING IMAGES
import dashboard from "../images/1.dashboard.png";
import lab_test from "../images/2.lab-test.png";
import appointment from "../images/3.appointment.png";
import medicine_order from "../images/4.medicine-order.png";
import message from "../images/5.message.png";
import payment from "../images/6.payment.png";
import settings from "../images/7.setting.png";
import help from "../images/8.help.png";

function SideBar() {
  return (
    <div id="sideBarItems">
      <div>
      <p>Medico Sales</p>
      <div id="sideBarButtons">
        <div id="buttons">
          <button id="change_color"><img src={dashboard}/>Dashboard</button>
          <button><img src={lab_test}/>Lab Test</button>
          <button><img src={appointment}/>Appointment</button>
          <button><img src={medicine_order}/>Medicine Order</button>
          <button><img src={message}/>Message</button>
          <button><img src={payment}/>Payment</button>
          <button><img src={settings}/>Settings</button>
        </div>
      </div>
      </div>
      <div><button><img src={help}/>Help</button></div>
    </div>
  );
}

export default SideBar;

// # Pro icons styles
// npm i --save @fortawesome/pro-solid-svg-icons
// npm i --save @fortawesome/pro-regular-svg-icons
// npm i --save @fortawesome/pro-light-svg-icons
// npm i --save @fortawesome/pro-thin-svg-icons
// npm i --save @fortawesome/pro-duotone-svg-icons
// npm i --save @fortawesome/sharp-solid-svg-icons
// npm i --save @fortawesome/sharp-regular-svg-icons
// npm i --save @fortawesome/sharp-light-svg-icons
