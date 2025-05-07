const STORAGE_KEY = "feedbacks";

export const loadFeedbacks = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFeedbacks = (feendbacks) => {
  const raw = localStorage.getItem(STORAGE_KEY);

  let existing = [];

  try {
    const parsed = JSON.parse(raw);
    // parsed가 배열인지 확인
    existing = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    existing = [];
  }
  const updated = [...existing, feendbacks];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
