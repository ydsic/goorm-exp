import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { loadFeedbacks } from "../utils/localStorage";

export default function useSearchFeedback() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const allFeedbacks = loadFeedbacks();

  // 필터 최적화
  const filteredFeedbacks = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return allFeedbacks.filter(
      (item) =>
        item.username.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery)
    );
  }, [query, allFeedbacks]);

  // 자동완성 최적화
  const suggestions = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return [
      ...new Set(
        allFeedbacks
          .map((item) => item.username)
          .filter((name) => name.toLowerCase().includes(lowerQuery))
      ),
    ];
  }, [query, allFeedbacks]);

  const updateQuery = (newQuery) => {
    setSearchParams({ q: newQuery });
  };

  return {
    query,
    filteredFeedbacks,
    suggestions,
    updateQuery,
  };
}
