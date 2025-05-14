import { useMemo } from "react";

export function useFormatTimeAgo(dateString) {
  return useMemo(() => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;

    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffSec < 60) return "방금 전";
    if (diffMin < 60) return `${diffMin}분 전`;
    if (diffHour < 24) return `${diffHour}시간 전`;

    if (diffDay === 1) return "어제";
    if (diffDay < 7) return `${diffDay}일 전`;

    // 일주일 넘으면 년-월-일 포맷
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }, [dateString]);
}
