import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography, TextField, Rating } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const drawerWidth = 240;
const headerHeight = 1;

export default function LeftDrawer() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          top: "64px",
          bottom: "0",
          boxSizing: "border-box",
          marginTop: headerHeight,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <Typography variant="h6" sx={{ ml: 2 }}>
          Filter
        </Typography>
        <Divider/>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Gardening"
          />
          <FormControlLabel control={<Checkbox />} label="Plants" />
          <FormControlLabel control={<Checkbox />} label="Seeds" />
          <FormControlLabel control={<Checkbox />} label="Bulbs" />
          <FormControlLabel control={<Checkbox />} label="Planters" />
          <FormControlLabel control={<Checkbox />} label="Others" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </FormGroup>
      </List>
      <Divider />
      <List>
        <Typography variant="subtitle1" sx={{ ml: 2 }}>
          Price
        </Typography>
        <FormGroup sx={{ pl: 2, pr: 1 }}>
          <TextField
            size="small"
            label="Minimum"
            variant="outlined"
            type="number"
          />
        </FormGroup>
      </List>
      <Divider />
      <List>
        <Typography variant="subtitle1" sx={{ ml: 2 }}>
          Rating
        </Typography>
        <Rating name="rating" max={5} />
      </List>
    </Drawer>
  );
}
