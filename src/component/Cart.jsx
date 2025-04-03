import React from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("cartAllProduct", cartAllProduct);

  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id ? { ...item, count: item?.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id && item.count > 1
          ? { ...item, count: item?.count - 1 }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct?.filter((item) => item?.id !== id);
    setCartAllProduct(filteredItem);
  };

  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct?.map((product) => {
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 border rounded d-flex gap-3 mb-3"
              key={product?.id}
            >
              <div className="p-1">
                <img
                  src={product?.img}
                  alt={product?.model}
                  className="cart-product-size img-fluid"
                />
              </div>
              <div className="p-1 d-flex flex-column gap-3">
                <div>
                  <h3 className="text-hiding m-0">{product?.model?.toUpperCase()}</h3>
                  <p className="m-0 fs-5">
                    <span className="font-bold ">₹</span> {product?.price}
                  </p>
                  <p className="m-0 font-size-12 font-bold">{product?.space}</p>
                  <p className="m-0 font-size-12 font-bold">{product?.camera}</p>
                  <div className="d-flex gap-3 mt-1 align-items-center">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleDecrement(product?.id)}
                    >
                      -
                    </button>
                    <p className="m-0">{product?.count}</p>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleIncrement(product?.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">{product?.description}</p>
                  <p
                    className="m-0 pointer"
                    onClick={() => handleDeleteItem(product?.id)}
                  >
                    <i className="fa-solid fa-trash text-danger"></i>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {cartAllProduct.length === 0 && (
          <div className="col-12">
            <h1 className="text-center fs-3">No Products Available in Cart</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
