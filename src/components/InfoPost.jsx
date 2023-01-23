import React, { useEffect } from "react";
import { getPost } from "../lensQueries/getPost";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getPostComments } from "../lensQueries/getPostComments";
import { urlContain } from "../utils/UrlContain";
import { useMediaQuery } from "react-responsive";

const InfoPost = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const [infoPost, setInfoPost] = useState([]);
  const [infoComments, setInfoComments] = useState([]);
  const [lastComments, setLastComments] = useState([]);
  const [page, setPage] = useState(null);

  let { idpost } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getPost(idpost);
        setInfoPost(response);
      } catch (err) {
        console.log(err);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const initPost = async () => {
      try {
        const response = await getPostComments(idpost, page);
        setInfoComments(response.data?.publications);
      } catch (error) {
        console.log(error);
      }
    };
    initPost();
  }, [page]);

  const loadMore = () => {
    setPage(infoComments?.pageInfo?.next);
    setLastComments([...lastComments, ...infoComments?.items]);
  };

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
          flexDirection: isMobile ? "row" : "column",
          gap: 20,
          marginLeft: isMobile ? 240 : 0,
          marginRight: isMobile ? 240 : 0,
          paddingTop: 60,
          paddingBottom: 60,
          justifyContent: "space-around",
          backgroundColor: "black",
          alignItems: isMobile ? "" : "center",
        }}
      >
        <div>
          <img
            style={{
              borderRadius: 10,
              marginLeft: 10,
              maxHeight: isMobile ? "100%" : 350,
            }}
            alt="img-post"
            src={`${infoPost?.data?.publication.metadata?.media?.map((url) =>
              urlContain(url.original.url)
            )}`}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <p style={{ color: "white" }}>
              Total Amount Of Mirrors :{"    "}
              {infoPost?.data?.publication.stats?.totalAmountOfMirrors}
            </p>
            <p style={{ color: "white" }}>
              Total Amount Of Collects:
              {"    "}
              {infoPost?.data?.publication.stats?.totalAmountOfCollects}
            </p>
            <p style={{ color: "white" }}>
              Total Comment:
              {"    "}
              {infoPost?.data?.publication.stats?.totalAmountOfComments}
            </p>
          </div>
        </div>
        <div style={{ paddingRight: 10, paddingLeft: isMobile ? 0 : 20 }}>
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
            <p style={{ color: "white" }}>
              {infoPost?.data?.publication?.metadata?.description}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p
              style={{
                color: "#8e8f8f",
                fontSize: 24,
                fontWeight: "500",
                marginBottom: 0,
              }}
            >
              Comments
            </p>
            <div
              style={{
                scrollBehavior: "smooth",
                overflowY: "scroll",
                height: 500,
              }}
            >
              {lastComments?.concat(infoComments?.items).map((data, index) => (
                <ul key={index} style={{ padding: 0, listStyle: "none" }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <img
                      style={{ width: 30, height: 30, borderRadius: 40 }}
                      src={urlContain(data?.profile?.picture?.original?.url)}
                      alt="img profile user"
                    />
                    <p
                      onClick={() => navigate(`/user/${data?.profile?.handle}`)}
                      style={{ color: "#f56f3a", cursor: "pointer" }}
                    >
                      {data?.profile?.handle}
                    </p>
                  </div>
                  <li style={{ color: "white" }}>
                    {data?.metadata?.description}
                  </li>
                </ul>
              ))}
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 auto",
                  marginTop: 20,
                  padding: 10,
                  width: isMobile ? 400 : 200,
                  textAlign: "center",
                  background: "none",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "#1062dd",
                  borderRadius: 5,
                }}
                onClick={loadMore}
              >
                More Comments
              </button>
              <p
                style={{
                  borderTop: "1px solid white",
                  textAlign: "center",
                  color: "white",
                }}
              >
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
