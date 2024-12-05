export type Video = {
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
  };
  statistics?: {
    subscriberCount: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishedAt: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
      high: {
        height: number;
        url: string;
        width: number;
      };
      medium: {
        height: number;
        url: string;
        width: number;
      };
    };
    title: string;
  };
};
