import * as React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";


const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://picsum.photos/200",
    rating: 4,
    price: "$19.99",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://picsum.photos/200",
    rating: 3.5,
    price: "$29.99",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://picsum.photos/200",
    rating: 5,
    price: "$14.99",
  },
];

export default function ProductList() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("Relevance");

  const handleSortChange = (event) => {
    setSort(event.target.textContent);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={6}  mt={8}>
      <TextField
        variant="outlined"
        label="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Box display="flex" mt={2}>
        <Button
          variant={sort === "Relevance" ? "contained" : "outlined"}
          onClick={handleSortChange}
        >
          Relevance
        </Button>
        <Button
          variant={sort === "Popular" ? "contained" : "outlined"}
          onClick={handleSortChange}
        >
          Popular
        </Button>
        <Button
          variant={sort === "Most new" ? "contained" : "outlined"}
          onClick={handleSortChange}
        >
          Most new
        </Button>
        <Button
          variant={sort === "Price" ? "contained" : "outlined"}
          onClick={handleSortChange}
        >
          Price
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={2}>
        {products.map((product) => (
          <Box m={2} key={product.id}>
            <div
              style={{ display: "flex", flexWrap: "wrap", marginTop: "30px" }}
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  sx={{ maxWidth: 345, margin: "10px", flexGrow: 1 }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}
                      >
                        {product.name}
                      </Typography>
                      <IconButton>
                        <FavoriteIcon />
                      </IconButton>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ flexGrow: 1 }}
                      >
                        Rating: {product.rating}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        ${product.price}
                      </Typography>
                    </div>
                    <Button variant="contained" size="small" sx={{ mt: 1 }}>
                      Add to cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
