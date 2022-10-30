import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import { formControlClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { E } from "../enum";
import { GET_SEARCHES } from "../queries/getSearches";
import MovieSearch from "./MovieSearch";
import { titleSearchedFor } from "./SearchBar";
import "../style/DisplaySearches.css";

export default function DisplaySearches() {
  const { data, loading, error } = useQuery(GET_SEARCHES);
  const title = useReactiveVar(titleSearchedFor);
  useEffect(() => {}, [title]);

  /*
  const { data, loading, error } = useQuery(GET_SEARCHES, {
    variables: {
      offset: 0,
      limit: E.SEARCHES_SIZE,
    }
  });
  */

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Could not load searches ...</p>;

  return (
    <div className="displaySearchesContainer">
      <h2 className="displaySearchesHeader">{E.SEARCHES_SIZE} last searches</h2>
      {data?.searches.map(({ title }: { title: string }) => (
        <p>{title}</p>
      ))}
    </div>
  );
}
 