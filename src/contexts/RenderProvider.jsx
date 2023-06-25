/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// using context api for render
export const RenderContext = createContext(null);

export default function RenderProvider({ children }) {
  const [render, setRender] = useState("Home");
  
  // product data
  const productOrders = [];

  const renderInfo = {
    render,
    setRender,
    productOrders,
  }

  return (
    <RenderContext.Provider value={renderInfo}>
      {children}
    </RenderContext.Provider>
  )
}