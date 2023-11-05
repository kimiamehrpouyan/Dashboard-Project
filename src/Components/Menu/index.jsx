import React from "react";
import {
  Admin,
  Container,
  Logo,
  MenuBar,
  UpgradeSection,
} from "../Styles/Menu.styled";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Container>
      <Logo>
        <img src="assets/Subtract.png" alt="Logo" />
        <span>Base</span>
      </Logo>
      <MenuBar>
        <ul>
          <li>
            <img className="icon" src="assets/Category.png" alt="" />
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li>
            <img className="icon" src="assets/Chart.png" alt="" />
            <Link to={"/analytics"}>Analytics</Link>
          </li>
          <li>
            <img className="icon" src="assets/Ticket.png" alt="" />
            <Link>Invoice</Link>
          </li>
          <li>
            <img className="icon" src="assets/Document.png" alt="" />
            <Link>Schedule</Link>
          </li>
          <li>
            <img className="icon" src="assets/Calendar.png" alt="" />
            <Link>Calendar</Link>
          </li>
          <li>
            <img className="icon" src="assets/Activity.png" alt="" />
            <Link>Messages</Link>
          </li>
          <li>
            <img className="icon" src="assets/Notification.png" alt="" />
            <Link>Notification</Link>
          </li>
          <li>
            <img className="icon" src="assets/Setting.png" alt="" />
            <Link>Settings</Link>
          </li>
        </ul>
      </MenuBar>

      <UpgradeSection>
        <img src="assets/object.png" alt="object" />
        <div className="object">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="43"
            viewBox="0 0 127 43"
            fill="none"
          >
            <path
              d="M0 43L13.4908 0H114.905L127 43H0Z"
              fill="url(#paint0_linear_4_4888)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_4888"
                x1="63.5"
                y1="0"
                x2="63.5"
                y2="43"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7EAAFF" stopOpacity="0.29" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="rectangle"></div>

        <button className="upgrade">Upgrade Now</button>
      </UpgradeSection>

      <Admin className="admin">
        <img src="assets/Admin.png" alt="Admin" />
        <div className="information">
          <span>Easin Arafat</span>
          <span>Free Account</span>
        </div>
        <img src="assets/Logout.png" alt="" />
      </Admin>
    </Container>
  );
}
