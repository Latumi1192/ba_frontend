import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";

export default function BasicMenu() {
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
  };

  const [brand, setBrand] = React.useState("Select Brand");
  const [car, setCar] = React.useState("Select Car");

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open1 ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? "true" : undefined}
        variant="outlined"
        onClick={handleClick1}
      >
        {brand}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setBrand("Audi");
            handleClose();
          }}
        >
          Audi
        </MenuItem>
        <MenuItem
          onClick={() => {
            setBrand("Tesla");
            handleClose();
          }}
        >
          Tesla
        </MenuItem>
        <MenuItem
          onClick={() => {
            setBrand("BMW");
            handleClose();
          }}
        >
          BMW
        </MenuItem>
      </Menu>

      <Button
        id="basic-button"
        aria-controls={open2 ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        variant="outlined"
        onClick={handleClick2}
      >
        {car}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setCar("A8");
            handleClose();
          }}
        >
          A8
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCar("Model S");
            handleClose();
          }}
        >
          Model S
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCar("S500");
            handleClose();
          }}
        >
          S500
        </MenuItem>
      </Menu>
    </Box>
  );
}
