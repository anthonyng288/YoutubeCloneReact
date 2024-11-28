import { Link, Stack } from "@mui/material";
import { logo } from "../utils/constants";
import Searchbar from "./Searchbar";

const Navbar = () => {
  /**
   *  Set's the stack (container component for arranging elements vertically or horizontally)
   * aligning the items in the center of the view
   */

  return (
    <Stack
      data-testid="navbar"
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link href="/" sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45}></img>
      </Link>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
