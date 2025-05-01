import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="page-content">
      <h2>Subscribe</h2>
      <p>Join our community and receive the latest updates and personalized tools.</p>

      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
