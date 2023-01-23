import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../lensQueries/getUserPosts";
import { getUserProfile } from "../lensQueries/getUserProfile";
import { urlContain } from "../utils/UrlContain";

const UserProfile = () => {
  const [infoUser, setInfoUser] = useState();
  const [infoPostUser, setInfoPostUser] = useState();

  let { iduser } = useParams();

  const init = async () => {
    try {
      const response = await getUserProfile(iduser);
      setInfoUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  init();

  useEffect(() => {
    const initPost = async () => {
      try {
        const response = await getUserPosts(infoUser?.id);
        setInfoPostUser(response);
      } catch (error) {
        console.log(error);
      }
    };

    initPost();
  }, [infoUser]);

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
            style={{ width: 200, height: 200 }}
            src={urlContain(infoUser?.picture?.original?.url)}
            alt="foto perfil"
          />
          <p>nombre de usuario: @{infoUser?.name}</p>
          <div>
            <p>seguidores: {infoUser?.stats?.totalFollowers}</p>
            <p>seguidos: {infoUser?.stats?.totalFollowing}</p>
          </div>
        </div>
        <div>
          <h3 style={{ margin: 0, marginBottom: 10 }}>Publicaciones</h3>
          <div
            style={{
              paddingTop: 30,
              display: "grid",
              justifyItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 10,
            }}
          >
            {infoPostUser?.data?.publications?.items.map((img, index) => (
              <div key={index}>
                <img
                  alt="publicacion img"
                  style={{ width: 200, height: 200 }}
                  src={`${img.metadata.media.map((url) =>
                    urlContain(url.original.url)
                  )}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
