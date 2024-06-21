import React from "react";

const Category = () => {
  return (
    <div className="sidebar category">
      <div className="title">
        <h3>Category</h3>
      </div>
      <div className="category-list">
        <label className="category-item">
          <input type="checkbox" />
          Adventure Tours
        </label>

        <label className="category-item">
          <input type="checkbox" defaultChecked />
          City Tours
        </label>

        <label className="category-item">
          <input type="checkbox" />
          Couple Tours
        </label>

        <label className="category-item">
          <input type="checkbox" />
          Group Tours
        </label>

        <label className="category-item">
          <input type="checkbox" />
          Hosted Tours
        </label>
      </div>
    </div>
  );
};

export default Category;
