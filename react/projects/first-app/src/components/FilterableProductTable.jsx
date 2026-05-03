import React, { useState } from "react";

const FilterableProductTableParent = ({ products }) => {
  const [searchText, setSearchText] = useState("");
  const [isStockedOnly, setIsStockedOnly] = useState(false);

  return (
    <>
      <SearchBar
        searchText={searchText}
        isStockedOnly={isStockedOnly}
        setSearchText={setSearchText}
        setIsStockedOnly={setIsStockedOnly}
      />
      <ProductTable
        searchText={searchText}
        isStockedOnly={isStockedOnly}
        products={products}
      />
    </>
  );
};

const SearchBar = ({
  searchText,
  isStockedOnly,
  setSearchText,
  setIsStockedOnly,
}) => {
  return (
    <div className="p-3 border">
      <form>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            checked={isStockedOnly}
            onChange={(e) => setIsStockedOnly(e.target.checked)}
          />{" "}
          Only show product in stock
        </label>
      </form>
    </div>
  );
};

const ProductCategoryRow = ({ category }) => {
  return (
    <tr className="border bg-success mt-2 text-center">
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = ({ searchText, isStockedOnly, products }) => {
  const row = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }

    if (isStockedOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      row.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
    }

    row.push(<ProductRow product={product} key={product.name} />);

    lastCategory = product.category;
  });
  return (
    <div className="border p-3 mt-2">
      <table className="w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>{row}</tbody>
      </table>
    </div>
  );
};

const FilterableProductTable = () => {
  const PRODUCT = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Bannana" },
    { category: "Fruits", price: "$2", stocked: false, name: "Dragon Fruit" },
    { category: "Vagetables", price: "$2", stocked: true, name: "Peas" },
    { category: "Vagetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vagetables", price: "$1", stocked: true, name: "Ladyfinger" },
  ];

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4 border p-3">
          <FilterableProductTableParent products={PRODUCT} />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default FilterableProductTable;
