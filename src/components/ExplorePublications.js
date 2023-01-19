import React, { useEffect, useReducer, useState } from "react";
import { explorePublications } from "../lensQueries/explorePublications";
import CardImg from "./CardImg";

const initialState = {
  data: null,
  loading: false,
  error: null,
  selectedButton: "LATEST",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_START":
      return {
        ...state,
        loading: true,
        selectedButton: action.payload,
      };
    case "REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default function ExplorePublications(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (button) => {
    dispatch({ type: "REQUEST_START", payload: button });
  };

  let data = state?.data?.explorePublications?.items;

  const init = async () => {
    if (state.selectedButton) {
      try {
        const request = {
          sortCriteria: state.selectedButton, //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
          noRandomize: true,
          sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
          publicationTypes: ["POST"],
          cursor: '{"timestamp":1,"offset":0}',
          limit: 24,
        };
        const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
        dispatch({ type: "REQUEST_SUCCESS", payload: response.data });
      } catch (err) {
        dispatch({ type: "REQUEST_FAILURE", payload: err });
        console.log(err);
      }
    }
  };

  useEffect(() => {
    init();
  }, [state.selectedButton]);

  return (
    <div
      style={{ backgroundColor: "black", height: "100%", paddingBottom: 30 }}
    >
      <div style={{ marginLeft: 200, marginRight: 200 }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: 10,
          }}
        >
          <button
            style={{
              backgroundColor: "#123353",
              color: "white",
              padding: 10,
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              backgroundColor:
                state.selectedButton === "LATEST" ? "grey" : "#123353",
            }}
            onClick={() => {
              handleClick("LATEST");
            }}
          >
            Mas recientes
          </button>
          <button
            style={{
              backgroundColor: "#123353",
              color: "white",
              padding: 10,
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              backgroundColor:
                state.selectedButton === "TOP_COMMENTED" ? "grey" : "#123353",
            }}
            onClick={() => {
              handleClick("TOP_COMMENTED");
            }}
          >
            Mas comentadas
          </button>
          <button
            style={{
              backgroundColor: "#123353",
              color: "white",
              padding: 10,
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              backgroundColor:
                state.selectedButton === "TOP_COLLECTED" ? "grey" : "#123353",
            }}
            onClick={() => {
              handleClick("TOP_COLLECTED");
            }}
          >
            Mas coleccionadas
          </button>
        </div>
        {!state.data && (
          <p style={{ fontSize: 50, color: "white" }}>Loading...</p>
        )}
        {state.loading && (
          <p style={{ fontSize: 50, color: "white" }}>Loading...</p>
        )}

        {state.data === null ? (
          "Esta cargando ..."
        ) : (
          <div>
            <CardImg data={data} />
          </div>
        )}
      </div>
    </div>
  );
}
