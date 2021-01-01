import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>The Page you're looking for as not found on the server</h1>
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
