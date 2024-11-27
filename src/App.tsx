import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetailPage,
} from "./components";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      {/* Displays the component in the corresponding path (Route) */}
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
