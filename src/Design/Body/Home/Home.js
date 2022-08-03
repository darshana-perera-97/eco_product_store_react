import React from "react";
import ButtonSet from "./ButtonSet";
import Carasole from "./Carasole";

export default function Home() {
  return (
    <div>
      <Carasole />
      <i>
        <p
          id="para"
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          {" "}
          New Ideas
        </p>
      </i>
      <ButtonSet />
      
    </div>
  );
}
