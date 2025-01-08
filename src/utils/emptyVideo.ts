import { Video } from "../types/Video";

export const emptyVideo: Video = {
  id: {
    kind: "",
    videoId: "",
    channelId: "",
  },
  statistics: {
    subscriberCount: "0",
  },
  snippet: {
    channelId: "",
    channelTitle: "",
    description: "",
    liveBroadcastContent: "",
    publishedAt: "",
    thumbnails: {
      default: {
        height: 0,
        url: "",
        width: 0,
      },
      high: {
        height: 0,
        url: "",
        width: 0,
      },
      medium: {
        height: 0,
        url: "",
        width: 0,
      },
    },
    title: "",
  },
};
