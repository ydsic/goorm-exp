import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { loadFeedbacks } from "../utils/localStorage";

export default function useSearchFeedback() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filtered, setFiltered] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const allFeedbacks = loadFeedbacks();

  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    const filteredData = allFeedbacks.filter(
      (item) =>
        item.username.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery)
    );

    const uniqueSuggestions = [
      ...new Set(
        allFeedbacks
          .map((item) => item.username)
          .filter((name) => name.toLowerCase().includes(lowerQuery))
      ),
    ];

    setFiltered(filteredData);
    setSuggestions(uniqueSuggestions);
  }, [query]);

  const updateQuery = (newQuery) => {
    setSearchParams({ q: newQuery });
  };

  return {
    query,
    filteredFeedbacks: filtered,
    suggestions,
    updateQuery,
  };
}
