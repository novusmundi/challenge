import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../lensQueries/getUserPosts";
import { getUserProfile } from "../lensQueries/getUserProfile";
import { urlContain } from "../utils/UrlContain";
import { useMediaQuery } from "react-responsive";

const UserProfile = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const [infoUser, setInfoUser] = useState([]);
  const [infoPostUser, setInfoPostUser] = useState([]);
  const [lastPostUser, setLastPostUser] = useState([]);
  const [page, setPage] = useState(null);

  let { iduser } = useParams();
  console.log(infoPostUser?.data?.publications?.items);
  // console.log(
  //   lastPostUser
  //     .concat(infoPostUser?.data?.publications?.items)
  //     .map((data, index) => <CardImg data={data} />)
  // );

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getUserProfile(iduser);
        setInfoUser(response);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const initPost = async () => {
      try {
        const response = await getUserPosts(infoUser?.id, page);
        setInfoPostUser(response);
      } catch (error) {
        console.log(error);
      }
    };

    initPost();
  }, [infoUser, page]);

  const loadMore = () => {
    setPage(infoPostUser?.data?.publications?.pageInfo?.next);
    setLastPostUser([
      ...lastPostUser,
      ...infoPostUser?.data?.publications?.items,
    ]);
  };

  return (
    <div style={{ backgroundColor: "black", paddingBottom: 30 }}>
      <h1
        style={{
          margin: 0,
          color: "white",
          paddingTop: 20,
          paddingBottom: 20,
          textAlign: "center",
        }}
      >
        Nomu Challenge
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
          backgroundColor: "wheat",
        }}
      >
        <div
          style={{
            display: isMobile ? "" : "flex",
            flexDirection: isMobile ? "" : "column",
            alignItems: isMobile ? "" : "center",
          }}
        >
          <img
            style={{ width: 200, height: 200 }}
            src={urlContain(infoUser?.picture?.original?.url)}
            alt="foto perfil"
          />
          <p>@{infoUser?.name}</p>
          <div>
            <p>Followers: {infoUser?.stats?.totalFollowers}</p>
            <p>Following: {infoUser?.stats?.totalFollowing}</p>
          </div>
        </div>
        <div>
          <h3
            style={{
              margin: 0,
              marginBottom: 10,
              textAlign: isMobile ? "" : "center",
            }}
          >
            Publications
          </h3>
          <div
            style={{
              paddingTop: 30,
              display: "grid",
              justifyItems: "center",
              gridTemplateColumns: isMobile ? "1fr 1fr 1fr 1fr" : "1fr 1fr",
              gap: 10,
              scrollBehavior: "smooth",
              overflowY: "scroll",
              height: 700,
            }}
          >
            {lastPostUser
              ?.concat(infoPostUser?.data?.publications?.items)
              .map((img, index) => (
                <div key={index}>
                  <img
                    alt="publicacion img"
                    style={{
                      width: isMobile ? 200 : 150,
                      height: isMobile ? 200 : 150,
                    }}
                    src={`${img?.metadata?.media?.map((url) =>
                      urlContain(url?.original?.url)
                    )}`}
                  />
                </div>
              ))}
          </div>
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
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
