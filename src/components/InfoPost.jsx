import React from "react";
import { getPost } from "../lensQueries/getPost";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getPostComments } from "../lensQueries/getPostComments";
import { urlContain } from "../utils/UrlContain";

const InfoPost = () => {
  const [infoPost, setInfoPost] = useState([]);
  const [infoComments, setInfoComments] = useState([]);

  let { idpost } = useParams();
  const navigate = useNavigate();

  const init = async () => {
    try {
      const response = await getPost(idpost);
      setInfoPost(response);
    } catch (err) {
      console.log(err);
    }
  };

  const initPost = async () => {
    try {
      const response = await getPostComments(idpost);
      setInfoComments(response.data?.publications);
    } catch (error) {
      console.log(error);
    }
  };

  init();
  initPost();

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <h1
        style={{
          color: "white",
          margin: 0,
          textAlign: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        Challenge Nomu
      </h1>
      <div
        style={{
          display: "flex",
          gap: 20,
          marginLeft: 240,
          marginRight: 240,
          paddingTop: 60,
          paddingBottom: 60,
          justifyContent: "space-around",
          backgroundColor: "wheat",
        }}
      >
        <div>
          <img
            style={{ borderRadius: 10, marginLeft: 10, maxHeight: 500 }}
            alt="img-post"
            src={`${infoPost?.data?.publication.metadata?.media?.map((url) =>
              urlContain(url.original.url)
            )}`}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <p>
              Total Amount Of Mirrors :{"    "}
              {infoPost?.data?.publication.stats?.totalAmountOfMirrors}
            </p>
            <p>
              Total Amount Of Collects:
              {"    "}
              {infoPost?.data?.publication.stats?.totalAmountOfCollects}
            </p>
            <p>
              Total Comment:
              {"    "}
              {infoPost?.data?.publication.stats?.totalAmountOfComments}
            </p>
          </div>
        </div>
        <div style={{ paddingRight: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              gap: 5,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img
                style={{ width: 30, height: 30, borderRadius: 100 }}
                src={`${urlContain(
                  infoPost?.data?.publication?.profile?.picture?.original?.url
                )}`}
                alt="imguser"
              />
              <p
                style={{ cursor: "pointer", color: "#f56f3a" }}
                onClick={() =>
                  navigate(
                    `/user/${infoPost?.data?.publication?.profile?.handle}`
                  )
                }
              >
                {" "}
                @{infoPost?.data?.publication?.profile?.handle}
              </p>
            </div>
            <p>{infoPost?.data?.publication?.metadata?.description}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p>Comments</p>
            <div
              style={{
                scrollBehavior: "smooth",
                overflowY: "scroll",
                height: 350,
              }}
            >
              {infoComments?.items?.map((data) => (
                <ul key={data.id} style={{ padding: 0, listStyle: "none" }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <img
                      style={{ width: 30, height: 30, borderRadius: 40 }}
                      src={urlContain(data.profile?.picture?.original?.url)}
                      alt="img profile user"
                    />
                    <p
                      onClick={() =>
                        navigate(
                          `/user/${data.metadata.name.replace(
                            "Comment by @",
                            ""
                          )}`
                        )
                      }
                      style={{ color: "#f56f3a", cursor: "pointer" }}
                    >
                      {data.metadata.name.replace("Comment by ", "")}
                    </p>
                  </div>
                  <li>{data.metadata.description}</li>
                </ul>
              ))}
              <p style={{ borderTop: "1px solid black", textAlign: "center" }}>
                It is all, nothing more 🤐
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPost;
