import React from "react";
import { useEffect } from "react";
import { getPost } from "../lensQueries/getPost";
import { useParams } from "react-router-dom";
import { useState } from "react";

const InfoPost = () => {
  const [infoPost, setInfoPost] = useState();

  let { idpost } = useParams();
  console.log(infoPost?.data?.publication);
  const init = async () => {
    try {
      const response = await getPost(idpost);
      setInfoPost(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <h1
        style={{
          color: "white",
          margin: 0,
          textAlign: "center",
          paddingTop: 20,
        }}
      >
        Challenge Nomu
      </h1>
      <div
        style={{
          display: "flex",
          marginLeft: 200,
          marginRight: 200,
          paddingTop: 60,
          justifyContent: "space-around",
          backgroundColor: "wheat",
        }}
      >
        <img alt="img-post" src="" />
        <div>
          <p>User info: @{infoPost?.data?.publication?.profile?.handle}</p>
          <p>Comments</p>
          <ul>
            <li>algo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoPost;
