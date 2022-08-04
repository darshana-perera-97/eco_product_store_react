import React from "react";
import Grid from "@mui/material/Grid";
import SingleIdea from "./SingleIdea";

const idea = [
  {
    url: "https://tinybeans.com/wp-content/uploads/2019/03/beeswrap3417.jpg?w=640",
    clr: "red",
  },
  {
    url: "https://i.insider.com/606b3b3a856cd700198a329a?width=600&format=jpeg&auto=webp",
    clr: "blue",
  },
  {
    url: "https://www.sheknows.com/wp-content/uploads/2020/04/bees-wrap-food52.jpg?w=600",
    clr: "green",
  },
  {
    url: "https://apicms.thestar.com.my/uploads/images/2020/08/07/810452.jpg",
    clr: "yellow",
  },
  {
    url: "https://i0.wp.com/greenbusinessbureau.com/wp-content/uploads/2022/04/EcoLuxe-eco-gift-box.jpg?fit=1738%2C1510&ssl=1",
    clr: "teal",
  },
  {
    url: "http://www.switch-asia.eu/site/assets/files/2624/resizes/screen_shot_2563-10-15_at_14_33_42.png",
    clr: "light blue",
  },
  {
    url: "https://apicms.thestar.com.my/uploads/images/2020/08/07/810452.jpg",
    clr: "yellow",
  },
];

export default function Ideas() {
  return (
    <div>
      <Grid container spacing={2}>
        {idea.map((val, key) => {
          return (
            <Grid item xs={4} key={key} style={{ margin: "10px 0px" }}>
              <SingleIdea key={key} val={val} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
