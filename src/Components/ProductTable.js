import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const dummyData = [
  { productName: "Abstract 3D", stock: 32.4, price: 45.6, totalSales: 20 },
  { productName: "Abstract 3D", stock: 32.4, price: 45.6, totalSales: 20 },
  { productName: "Abstract 3D", stock: 32.4, price: 45.6, totalSales: 20 },
  { productName: "Abstract 3D", stock: 32.4, price: 45.6, totalSales: 20 },
];
const image =
  "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4";

const ProductTable = () => {
  return (
    <div className="ProductTable">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3>Product Sell</h3>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            className="input-class-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <select className="input-class">
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th className="right-align">Stock</th>
            <th className="right-align">Price</th>
            <th className="right-align">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, index) => (
            <tr key={index}>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <img
                  src={image}
                  style={{ height: "60px", borderRadius: "5px" }}
                  alt="system"
                />
                <div>
                  <h5 style={{marginBottom:"0px"}}>{item.productName}</h5>
                  <p style={{marginTop:"0px"}}>Description of the productname</p>
                </div>
              </div>
              <td className="right-align">{item.stock}</td>
              <td className="right-align">{`$${item.price}`}</td>
              <td className="right-align">{item.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
