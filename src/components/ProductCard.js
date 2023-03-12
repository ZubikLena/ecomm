import "./ProductCardStyles.css";

function ProductCard() {
  return (
    <div className="card-product">
      <div className="card-product-header">
        <div className="card-product-header-details">
          <h1 className="product-brand">NAKD</h1>
          <p className="product-categories">Hose</p>
        </div>
      </div>
      <div className="card-product-img">
        <img
          src={require("../imgs/glass.JPG")}
          alt=""
          className="product-img"
        />
      </div>
      <div className="card-product-body">
        <h1 className="product-name">Schwaze Hose</h1>
        <div className="flex-item">
          <p className="product-price">35$</p>
          <p className="product-stock">Stock: 23</p>
        </div>
        <div className="product-rate">
          <i className="bx bx-star icon-rate"></i>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
