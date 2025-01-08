import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    if (searchTerm) {
      const encodedSearchTerm = encodeURI(searchTerm);
      try {
        fetchFromAPI(`search?part=snippet&q=${encodedSearchTerm}`).then(
          (data) => {
            //We use .then for promises
            setVideos(data.items);
          }
        );
      } catch (error) {
        console.log("The Fetch Caused an error");
        console.log("Error: ", error);
      }
    }
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      {/* This is where the video feed will be displayed */}
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm} Videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;

/**
 * px - padding on the x-axis
 */
