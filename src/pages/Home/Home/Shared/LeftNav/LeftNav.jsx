import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <h4 className="bg-secondary p-4">All Category</h4>
      <div className="px-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none text-secondary"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
