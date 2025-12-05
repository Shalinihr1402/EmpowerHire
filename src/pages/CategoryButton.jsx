import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryButton({ category }) {
  const navigate = useNavigate();

  return (
    <button
      className="category-btn"
      onClick={() => navigate(`/jobs/${category}`)}
    >
      View Jobs →
    </button>
  );
}
