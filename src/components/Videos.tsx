//To do keep types in zod or seperate file

import { Box, Stack } from "@mui/material";
import type { Video } from "./";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos }: { videos: Video[] }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={3}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
