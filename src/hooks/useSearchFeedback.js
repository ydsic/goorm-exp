import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadFeedbacks } from "../utils/localStorage";

export default function useSearchFeedback() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    let updated = false;
    if (!params.has("category")) {
      params.set("category", "all");
      updated = true;
    }

    if (!params.has("q")) {
      params.set("q", "");
      updated = true;
    }

    if (updated) {
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  const query = params.get("q") || "";
  const category = params.get("category") || "all";

  const setQuery = (q) => {
    params.set("q", q);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const setCategory = (cat) => {
    params.set("category", cat);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const allFeedbacks = loadFeedbacks();

  // 필터 최적화
  const filteredFeedbacks = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return allFeedbacks.filter((item) => {
      const matchesQuery =
        item.username.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery);

      const matchesCategory = category === "all" || item.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category, allFeedbacks]);

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

  return {
    query,
    category,
    setQuery,
    setCategory,
    filteredFeedbacks,
    suggestions,
  };
}
