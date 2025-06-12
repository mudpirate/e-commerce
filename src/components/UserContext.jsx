import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <UIContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
