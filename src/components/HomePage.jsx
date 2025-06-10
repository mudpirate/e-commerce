import React, { useContext } from "react";
import { UIContext } from "./UserContext.jsx";

function HomePage() {
  const { openSidebar, openModal } = useContext(UIContext);

  return (
    <div>
      <header>
        <button onClick={openModal}>Show Modal</button>
      </header>
      {/* Your products, hero banner, etc. */}
    </div>
  );
}

export default HomePage;
