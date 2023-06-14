import { urlContain } from "../utils/UrlContain";
import { useMediaQuery } from "react-responsive";
import useProfile from "../hooks/useProfile";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const navigate = useNavigate();
  const { infoUser, infoPostUser, lastPostUser, loadMore } = useProfile();

  return (
    <div style={{ backgroundColor: "black", paddingBottom: 30 }}>
      <h1
        style={{
          margin: 0,
          color: "white",
          paddingTop: 20,
          paddingBottom: 20,
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        NomuLabs Challenge
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
          {console.log(infoUser)}
          <p style={{ color: "#f56f3a" }}>@{infoUser?.handle}</p>
          <div>
            <p style={{ color: "white" }}>
              Followers: {infoUser?.stats?.totalFollowers}
            </p>
            <p style={{ color: "white" }}>
              Following: {infoUser?.stats?.totalFollowing}
            </p>
          </div>
        </div>
        <div>
          <h3
            style={{
              color: "white",
              margin: 0,
              marginBottom: 10,
              textAlign: isMobile ? "" : "center",
            }}
          >
            Publications
          </h3>
          {infoPostUser?.data?.publications?.items?.length <= 0 && (
            <p style={{ color: "white", fontSize: 26 }}>No data!</p>
          )}
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
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "black",
          zIndex: 1,
          borderTop: "1px solid grey",
        }}
      >
        <p style={{ color: "white", textAlign: "center" }}>
          Diseñada por Francisco Rey
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
