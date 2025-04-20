const API_URL = "http://localhost:5173";

export async function getAllFeedbacks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getFeedbackById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createFeedback(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
