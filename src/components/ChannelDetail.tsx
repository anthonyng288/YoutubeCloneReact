import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState({});
  const { id } = useParams();

  console.log("Channel Details: ", channelDetail);
  // useEffect happens when id parameter changes
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
  }, [id]);

  return (
    <div>
      <h1>Channel Detail</h1>
      <p>Channel ID: {id}</p>
    </div>
  );
};

export default ChannelDetail;
