import React from "react";
import { useNavigate } from "react-router-dom";

const CardImg = ({ data }) => {
  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div
      style={{
        backgroundColor: "wheat",
        padding: 15,
        paddingTop: 30,
        display: "grid",
        justifyItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 10,
      }}
    >
      {data?.map((items) => (
        <img
          onClick={() => handleSubmit(items.id)}
          key={items.id}
          className="hover-img"
          style={{
            width: "100%",
            height: 300,
            borderRadius: 10,
            cursor: "pointer",
          }}
          src={`https://ipfs.io/ipfs/${items.metadata.media.map((url) =>
            url.original.url.replace("ipfs://", "")
          )}`}
          alt="imagen"
        />
      ))}
    </div>
  );
};
// .map((url) => url[0].original.url)
//   .map((newUrl) => newUrl.replace("ipfs://", ""));
export default CardImg;
