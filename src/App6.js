import { useState, useEffect } from "react";
import products from "./products.json";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
const App9 = () => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [orderValue, setOrderValue] = useState(0);
  

  useEffect(() => {
    

    let total = cart.length;
    let orderVal = cart.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.quantity * currentValue.price;
    }, 0);
    setQty(total);
    setOrderValue(orderVal);
  }, [cart]);

  const updateCart = (id, q, price) => {
    if (q === 0) {
      const newState1 = cart.filter((item) => {
        return item.id !== id;
      });
      setCart(newState1);
    } else {
      const newState = cart.map((obj) => {
        if (obj.id === id) {
          return { ...obj, quantity: q, total: q * price };
        }
        return obj;
      });

      setCart(newState);
    }
  };

  const addProduct = (obj, id) => {
    const found = cart.find((item) => {
      return item.id === id;
    });

    if (!found) {
      obj.quantity = 1;
      setCart([...cart, obj]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <h2>Coffee Shop</h2>
          </div>
          <div
            className="col-lg-1"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <h3>Cart:{qty}</h3>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          {products &&
            products.map((obj) => {
              return (
                <div className="col-lg-3" key={obj.id}>
                  <div className="card">
                    <img className="card-img-top" src={obj.image}></img>
                    <div className="card-body">
                      <h5 className="card-title">{obj.name}</h5>
                      <p className="card-text">{obj.desc}</p>
                      Price:{obj.price}
                      <button onClick={() => addProduct(obj, obj.id)}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          <hr></hr>
        </div>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">My Cart</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                {cart &&
                  cart.map((obj) => {
                    return (
                      <div key={obj.id}>
                        {obj.name} - Price:{obj.price} - Total:
                        {obj.quantity * obj.price}
                        <button
                          onClick={() =>
                            updateCart(obj.id, obj.quantity - 1, obj.price)
                          }
                        >
                          -
                        </button>
                        {obj.quantity}
                        <button
                          onClick={() =>
                            updateCart(obj.id, obj.quantity + 1, obj.price)
                          }
                        >
                          +
                        </button>
                      </div>
                    );
                  })}
                <h4>Order Value: {orderValue}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App9;