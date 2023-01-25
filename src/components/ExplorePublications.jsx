import CardImg from "./CardImg";
import { useMediaQuery } from "react-responsive";
import useExplorePublications from "../hooks/useExplorePublications";

const ExplorePublications = (props) => {
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const { data, lastImg, loading, selectedButton, handleClick, loadMore } =
    useExplorePublications();

  return (
    <div
      style={{ backgroundColor: "black", height: "100%", paddingBottom: 30 }}
    >
      <div
        style={{
          marginLeft: isMobile ? 200 : 10,
          marginRight: isMobile ? 200 : 10,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: 0,
            paddingTop: 30,
            color: "white",
          }}
        >
          NomuLabs Challenge
        </h1>
        <p style={{ color: "white", marginTop: 100, fontSize: 20 }}>Sort by:</p>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            gap: 20,
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <button
            style={{
              color: "white",
              padding: 10,
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              backgroundColor: selectedButton === "LATEST" ? "grey" : "#123353",
            }}
            onClick={() => {
              handleClick("LATEST");
            }}
          >
            Date created
          </button>
          <button
            style={{
              color: "white",
              padding: 10,
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              backgroundColor:
                selectedButton === "TOP_COLLECTED" ? "grey" : "#123353",
            }}
            onClick={() => {
              handleClick("TOP_COLLECTED");
            }}
          >
            Most collected
          </button>
          <button
            style={{
              color: "white",
              padding: 10,
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              backgroundColor:
                selectedButton === "TOP_MIRRORED" ? "grey" : "#123353",
            }}
            onClick={() => {
              handleClick("TOP_MIRRORED");
            }}
          >
            Most mirrored
          </button>
        </div>

        {!data && (
          <p style={{ fontSize: 50, color: "white", textAlign: "center" }}>
            Loading...
          </p>
        )}
        {loading && (
          <p style={{ fontSize: 50, color: "white", textAlign: "center" }}>
            Loading...
          </p>
        )}

        {data === null ? (
          "Esta cargando ..."
        ) : (
          <div
            style={{
              backgroundColor: "#0b130f",
              paddingTop: 30,
              display: "grid",
              justifyItems: "center",
              gridTemplateColumns: isMobile ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr",
              gap: 10,
            }}
          >
            {lastImg.concat(data?.items).map((data, index) => (
              <div key={index}>
                <CardImg data={data} />
              </div>
            ))}
          </div>
        )}
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
          marginBottom: 40,
        }}
        onClick={loadMore}
      >
        Load more
      </button>
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
          Diseñada por Francisco Rey |
          <a
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
              marginLeft: 5,
            }}
            href="https://www.linkedin.com/in/francisco-rey-71060419a/"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default ExplorePublications;
