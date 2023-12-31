/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// using context api for render
export const RenderContext = createContext(null);

export default function RenderProvider({ children }) {
  const [render, setRender] = useState("Home");
  const [productOrders, setProductOrders] = useState([]);

  const renderInfo = {
    render,
    setRender,
    productOrders,
    setProductOrders,
  };

  return (
    <RenderContext.Provider value={renderInfo}>
      {children}
    </RenderContext.Provider>
  )
}