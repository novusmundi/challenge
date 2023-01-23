import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlContain } from "../utils/UrlContain";
import moment from "moment";

const CardImg = ({ data }) => {
  const [hoverEvent, setHoverEvent] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/post/${id}`);
  };

  const handleMouse = () => {
    setHoverEvent(true);
  };

  const handleMouseOut = () => {
    setHoverEvent(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        onMouseOver={handleMouse}
        onMouseOut={handleMouseOut}
        onClick={() => handleSubmit(data?.id)}
        className="hover-img"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
          cursor: "pointer",
        }}
        src={`${data?.metadata?.media?.map((url) =>
          urlContain(url?.original?.url)
        )}`}
        alt="imagen"
      />
      <div
        style={{
          display: hoverEvent ? "flex" : "none",
          position: hoverEvent ? "absolute" : "",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: 0,
        }}
      >
        <p style={{ color: "#47dd39" }}>@{data?.profile?.handle}</p>
        <p style={{ margin: 5, color: "white" }}>
          Create at:{moment(data?.createdAt).format("l")}
        </p>
        <p style={{ margin: 5, color: "white" }}>
          Amount Of Collects:{data?.stats?.totalAmountOfCollects}
        </p>
        <p style={{ margin: 5, color: "white" }}>
          Amount Of Mirrors:{data?.stats?.totalAmountOfMirrors}
        </p>
        <p style={{ margin: 5, color: "white" }}>
          Amount Of Comments:{data?.stats?.totalAmountOfComments}
        </p>
      </div>
    </div>
  );
};

export default CardImg;
