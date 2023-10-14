import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBox,
  faUsers,
  faBullhorn,
  faMoneyBill,
  faQuestionCircle,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faTimes,
  faHandPeace,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ProductTable from "./ProductTable";
const items = [
  { icon: faChartLine, text: "Dashboard" },
  { icon: faBox, text: "Product" },
  { icon: faUsers, text: "Customers" },
  { icon: faBullhorn, text: "Promote" },
  { icon: faMoneyBill, text: "Income" },
  { icon: faQuestionCircle, text: "Help" },
];

const data = [
  {
    icon: faChartLine,
    name: "Earning",
    bg: "#dcfeed",
    earnings: "$198k",
    rise: "37.5%",
    status: "rise",
  },
  {
    icon: faBox,
    name: "Orders",
    bg: "#e5d8ff",
    earnings: "$150k",
    rise: "-10.2%",
    status: "downfall",
  },
  {
    icon: faMoneyBill,
    name: "Balance",
    bg: "#cdf3ff",
    earnings: "$150k",
    rise: "-10.2%",
    status: "downfall",
  },
  {
    icon: faBullhorn,
    name: "Total sales",
    bg: "#fec4e7",
    earnings: "$150k",
    rise: "-10.2%",
    status: "downfall",
  },
];

const barChartData = [
  { month: "jan", height: "200" },
  { month: "Feb", height: "100" },
  { month: "Mar", height: "90" },
  { month: "Apr", height: "200" },
  { month: "May", height: "50" },
  { month: "Jun", height: "60" },
  { month: "Jul", height: "70" },
  { month: "Aug", height: "210" },
  { month: "Sep", height: "90" },
  { month: "Oct", height: "40" },
  { month: "Nav", height: "220" },
  { month: "Dec", height: "20" },
];
const DashBoardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : ""}`}
    >
      <div className="sidebar">
        <div className="settings-container">
          <button className="settings-icon">⚙</button>
          <h1 className="sidebar-title">Dashboard</h1>
          <button className="close-icon" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="sidebar-items">
          {items.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon color="#313464" icon={item.icon} />
              <span style={{ color: "#313464" }} className="icon-text">
                {item.text}
              </span>
              <FontAwesomeIcon
                color="#313464"
                className="icon-text-arrow"
                icon={faArrowRight}
              />
            </li>
          ))}
        </ul>
        <div className="footer-sidebar">
          <img
            style={{ width: "50px", borderRadius: "50%", height: "50px" }}
            src="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4"
            alt=""
          />
          <div>
            {" "}
            <h3 style={{ margin: "0px" }}>Ganesh</h3>
            <p style={{ margin: "0px" }}>Project Manager</p>
          </div>
          <FontAwesomeIcon className="icon-text-arrow" icon={faArrowRight} />
        </div>
      </div>
      <div className="dashboard-body">
        <div className="header">
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
          <h3>Hello Ganesh</h3>
          <FontAwesomeIcon
            style={{ marginRight: "auto" }}
            color="#dfb791"
            icon={faHandPeace}
          />
          <div className="input-class-container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <input
              type="text"
              placeholder="Search..."
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((item, index) => (
            <div
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              className={`data-container ${item.status}`}
              key={index}
            >
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  backgroundColor: `${item.bg}`,
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "50px",
                    backgroundColor: item.backgroundColor,
                  }}
                  icon={item.icon}
                />
              </div>

              <div className="data">
                <span className="odd-color">{item.name}</span>
                <h4 style={{ margin: "0px" }}>{item.earnings}</h4>
                <p style={{ margin: "0px" }}>
                  {item.status === "rise" ? (
                    <>
                      <FontAwesomeIcon className="rise" icon={faArrowUp} />
                      <span className="rise">{item.rise}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon className="rise" icon={faArrowDown} />
                      <span className="rise">{item.rise}</span>
                    </>
                  )}
                </p>
                <span className="description">
                  {item.status === "rise" ? "This month" : "Last month"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div className="barchart-container">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <h3>Overview </h3>
                <p className="odd-color">Monthly income</p>
              </div>

              <div style={{ marginLeft: "auto" }}>
                <select className="input-class">
                  <option>Monthly</option>
                  <option>quaterly</option>
                </select>
              </div>
            </div>
            <div className="barchart-container-months">
              {barChartData.map((val, index) => {
                return (
                  <div key={index} style={{ marginTop: "auto" }}>
                    <div
                      className="bar"
                      style={{
                        height: `${val.height}px`,
                        backgroundColor:
                          val.month === "Aug" ? "#5a32ea" : "#f2efff",
                      }}
                    ></div>
                    <p style={{ textAlign: "center", maxHeight: "10px" }}>
                      {val.month}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pie-chart-container">
            <h3 style={{ margin: "2px" }}>Customers</h3>
            <p className="odd-color">Customers that buy products</p>
            <div className="circle">
              <h2 style={{ margin: "0px" }}>65%</h2>
              <p style={{ margin: "0px" }}>Total New Customers</p>
            </div>
          </div>
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
