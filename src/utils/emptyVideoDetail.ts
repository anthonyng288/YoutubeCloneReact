import { VideoDetailType } from "../types/VideoDetailType";

export const defaultVideoDetail: VideoDetailType = {
  kind: "",
  id: "Test",
  snippet: {
    publishedAt: "",
    channelId: "",
    title: "",
    description: "",
    thumbnails: {
      default: { url: "", width: 0, height: 0 },
      medium: { url: "", width: "0", height: "0" },
      high: { url: "", width: 0, height: 0 },
      standard: { url: "", width: 0, height: 0 },
      maxres: { url: "", width: 0, height: 0 },
    },
    channelTitle: "",
    tags: [],
    categoryId: 0,
    liveBroadcastContent: "",
    localized: { title: "", description: "" },
    defaultAudioLanguage: "",
  },
  contentDetails: {
    duration: "",
    dimension: "",
    definition: "",
    caption: false,
    licensedContent: false,
    contentRating: {},
    projection: "",
  },
  statistics: {
    viewCount: "",
    likeCount: "",
    favoriteCount: "",
    commentCount: "",
  },
};
