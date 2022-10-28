import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { E } from "../enum";
import { GET_SEARCHES } from "../queries/getSearches";

export default function DisplaySearches() {
  const { data, loading, error } = useQuery(GET_SEARCHES)
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
    <div>
      <h3>10 last searches</h3>
      {data.searches.map(({ title }: { title: string }) => (
        <p>{title}</p>
      ))}
    </div>
  );
}
