import { useState } from "react";

export default function FeedbackWidget({ apiKey }) {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!message.trim()) return;

    await fetch("https://your-backend.com/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ feedback: message }),
    });

    alert("Thanks for your feedback!");
    setMessage("");
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your feedback..."
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
