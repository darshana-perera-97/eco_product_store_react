import React from "react";

export default function ContactUs() {
  return (
    <div
      style={{
        margin: "20px 0px",
        background: "#c3f8c3",
        padding: "20px 40px",
      }}
    >
      <p
        style={{
          margin: "0px",
          fontSize: "24px",
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Contact Us
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <p style={{ margin: "0px", fontSize: "20px" }}>
            <b>D & D Productions </b>
            <br /> Colombo Road, <br /> Chilaw <br />
            Sri Lanka <br /> TP : +94 77 1461925
          </p>
        </div>
        <div style={{ width: "10%" }}>
          <label for="fname">Name :-</label>
          <br />
          <label for="lname">Email :-</label>
          <br />
          <label for="lname">Your Comments :-</label>
          <br />
        </div>
        <div style={{ width: "30%" }}>
          <input type="text" id="fname" name="fname" />
          <br />
          <input type="text" id="lname" name="lname" />
          <br />
          <textarea name="message" rows="5" cols="30" />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
