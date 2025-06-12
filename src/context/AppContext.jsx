import React, { createContext, useContext, useReducer } from "react";

// Initial state for the cart
const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};

// Cart reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          amount: state.amount + 1,
          total: updatedCart.reduce(
            (total, item) => total + item.newPrice * item.quantity,
            0
          ),
        };
      } else {
        const updatedCart = [...state.cart, { ...newItem, quantity: 1 }];
        return {
          ...state,
          cart: updatedCart,
          amount: state.amount + 1,
          total: updatedCart.reduce(
            (total, item) => total + item.newPrice * item.quantity,
            0
          ),
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload
      );
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
        amount: state.amount - itemToRemove.quantity,
        total: filteredCart.reduce(
          (total, item) => total + item.newPrice * item.quantity,
          0
        ),
      };

    case "UPDATE_QUANTITY":
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
        amount: updatedCart.reduce((total, item) => total + item.quantity, 0),
        total: updatedCart.reduce(
          (total, item) => total + item.newPrice * item.quantity,
          0
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        total: 0,
        amount: 0,
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Cart actions
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppContext;
