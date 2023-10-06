import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { CarServiceImpl } from "@/features/domain/services/CarServiceImpl";
import { BrandServiceImpl } from "@/features/domain/services/BrandServiceImpl";
import { Car } from "@/features/domain/dto/CarDTO";

export default function BasicMenu() {
  const CarServ = new CarServiceImpl();
  const BrandServ = new BrandServiceImpl();
  const brandArray = BrandServ.getAllBrand();

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
  const handleClose1 = () => {
    setAnchorEl1(null);
    setCar("Select Car");
    setVisibility(false);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const [alignment2, setAlignment2] = React.useState<string | null>("left");

  const handleAlignment2 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment2(newAlignment);
  };

  const [brand, setBrand] = React.useState<String>("Select Brand");
  const [car, setCar] = React.useState<String>("Select Car");
  const [carArray, setCarArray] = React.useState<Car[]>([]);
  const [visibility, setVisibility] = React.useState(false);

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
        onClose={handleClose1}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {brandArray.map((item) => (
          <MenuItem
            onClick={() => {
              setBrand(item);
              setCarArray(BrandServ.getAllCarFromBrand(item));
              handleClose1();
            }}
          >
            {item}
          </MenuItem>
        ))}
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
        onClose={handleClose2}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {carArray.map((item) => (
          <MenuItem
            onClick={() => {
              setCar(item.carname);
              setVisibility(true);
              handleClose2();
            }}
          >
            {item.carname}
          </MenuItem>
        ))}
      </Menu>
      {visibility && (
        <div>
          <Box>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="12" aria-label="left aligned">
                12 Months
              </ToggleButton>
              <ToggleButton value="24" aria-label="centered">
                24 Months
              </ToggleButton>
              <ToggleButton value="36" aria-label="right aligned">
                36 Months
              </ToggleButton>
              <ToggleButton value="48" aria-label="justified">
                48 Months
              </ToggleButton>
              <ToggleButton value="60" aria-label="justified">
                60 Months
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box>
            <ToggleButtonGroup
              value={alignment2}
              exclusive
              onChange={handleAlignment2}
              aria-label="text alignment"
            >
              <ToggleButton value="12" aria-label="left aligned">
                10.000 km
              </ToggleButton>
              <ToggleButton value="24" aria-label="centered">
                15.000 km
              </ToggleButton>
              <ToggleButton value="36" aria-label="right aligned">
                20.000 km
              </ToggleButton>
              <ToggleButton value="48" aria-label="justified">
                25.000 km
              </ToggleButton>
              <ToggleButton value="60" aria-label="justified">
                30.000 km
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </div>
      )}
    </Box>
  );
}
