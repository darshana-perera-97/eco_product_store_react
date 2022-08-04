import React from "react";
import Singlecard from "./Singlecard";
import Grid from "@mui/material/Grid";

const items = [
  {
    name: "Cloth Bags",
    url: "https://static.toiimg.com/photo/msid-80691403/80691403.jpg",
    price: "250",
    remain: "6",
    dis: "This is an eco friendly bage made up with removal clothes",
  },
  {
    name: "Wood Spoons",
    url: "https://www.conch-house.com/wp-content/uploads/2022/06/51OVAyPEDdL._SL500_.jpg",
    price: "125",
    remain: "7",
    dis: "Rather than using plastics, we can use the products made with",
  },
  {
    name: "Containers",
    url: "https://5.imimg.com/data5/SELLER/Default/2020/8/RB/GD/DP/91394211/eco-friendly-products-500x500.jpg",
    price: "75",
    remain: "99+",
    dis: "Paper containers for your day today life. We can use these products for",
  },
  {
    name: "Food Covers",
    url: "https://www.lcsupplies.co.uk/pub/media/magefan_blog/Ultimate_Guide_to_Eco-Friendly_Food_Packaging.png",
    price: "25",
    remain: "99+",
    dis: "You can deliver your food with the help of the paper covers provided by us",
  },
  {
    name: "Bag from Paddy",
    url: "https://www.ecoproductslk.com/wp-content/uploads/2019/09/EGCJM1.jpg",
    price: "125",
    remain: "32",
    dis: "These bags are made up with the removals of the paddy fields.",
  },
  {
    name: "Coir Brushes",
    url: "https://image.vietnamnews.vn/uploadvnnews/Article/2019/8/25/33932_p6.jpg",
    price: "100",
    remain: "99+",
    dis: "Heres available the brushes which are made up with the coir instread of using plastics.",
  },
  {
    name: "Paper Boxes",
    url: "https://elementura-amenities.com/wp-content/uploads/elementor/thumbs/Eco-friendly-amenities-Elementura-1-onyb5hyqrlz17gstxdxexcefqrdst7etsmp7lxvtg0.jpg",
    price: "85",
    remain: "99+",
    dis: "We are introducing a solution for all types of bottles to keep them inside.",
  },
  {
    name: "Tooth Brush",
    url: "https://cdn.shopify.com/s/files/1/0090/9236/6436/articles/ecofriendly-dropshipping.jpg?v=1608266691",
    price: "45",
    remain: "99+",
    dis: "You can use eco friendly tooth brushes rather than using plastics..",
  },
  {
    name: "Eco friendy Kitchen Items",
    url: "https://takeawaypackaging.co.uk/wp-content/uploads/2021/09/Accessories-1.jpg",
    price: "95",
    remain: "99+",
    dis: "All kinds of kitchen items are being made up with the eco friendly items.",
  },
];

export default function Store() {
  return (
    <div>
      <Grid container spacing={2}>
        {items.map((val, key) => {
          return (
            <Grid item xs={4} key={key} style={{ margin: "10px 0px" }}>
              <Singlecard key={key} val={val} />
            </Grid>
          );
        })}
      </Grid>
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <button
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "20px",
          }}
        >
          Load More Items
        </button>
      </div>
    </div>
  );
}
