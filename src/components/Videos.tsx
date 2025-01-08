//To do keep types in zod or seperate file

import { Box, Stack } from "@mui/material";
import type { ChannelPage } from "../types/ChannelPage";
import type { Video } from "./";
import { ChannelCard, VideoCard } from "./";

const Videos = ({
  videos,
  direction,
}: {
  videos: Video[];
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="stretch"
      gap={2}
    >
      {videos
        .filter((item) => {
          return item.id.kind != "youtube#playlist"; //No use for playlists, we filter then map
        })
        .map((item, index) => (
          <Box key={index} className={`${item.snippet.title} - ${index}`}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && (
              <ChannelCard channelDetail={item as unknown as ChannelPage} /> //Jank AF
            )}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
