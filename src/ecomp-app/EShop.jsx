import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Badge, TextField } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export const EShop = () => {
  const [txtsrch, setTxtsrch] = useState("");
  const [products, setProducts] = useState([]);
  const [filtProducts, setFiltProducts] = useState([]);

  const getProducts = async () => {
    const proddata = await axios.get("https://fakestoreapi.com/products");
    setProducts([...proddata.data]);
    setFiltProducts([...proddata.data]);
  };
  useEffect(() => {
    const filtered = products.filter((item) =>
      item.title.toUpperCase().includes(txtsrch.toUpperCase())
    );
    setFiltProducts(filtered);
  }, [txtsrch]);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <React.Fragment>
      <TextField
        label="Search"
        className="searchbox"
        onChange={(e) => setTxtsrch(e.target.value)}
      />
      <Grid container spacing={3}>
        {filtProducts.map((item) => (
          <Grid item xs={3}>
            <Card className="containeritem">
              <CardContent>
                <h3>
                  {item.title.substring(0, 25)}
                  {item.title.length > 30 && "..."}
                </h3>
                <AddShoppingCartOutlinedIcon className="cartingadd" />
                <Badge color="secondary" badgeContent={"$" + item.price}>
                  <img src={item.image} className="imgitem" />
                </Badge>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};