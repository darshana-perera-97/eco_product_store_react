import React from "react";
import img1 from "./a.jpg";
import img2 from "./b.jpg";
import img3 from "./c.jpg";
import img4 from "./d.jpg";

const images =[img3,img2,img1,img4];
export default function Carasole() {
  const [img, setImg] = React.useState(0);
  setTimeout(() => {
    setImg(img + 1);
  }, 2000);
  const y = img % 4;
  return (
    <div>
      <img src={images[y]} style={{width:"100%"}}/>
    </div>
  );
}
