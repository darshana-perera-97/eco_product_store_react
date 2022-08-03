import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 80px",
        background: "#c3f8c3",
      }}
    >
      <div style={{ display: "flex" }}>
        <Logo />
        <NavBar />
      </div>
      <Icons />
    </div>
  );
}
