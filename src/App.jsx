import { useContext } from "react";
import { RenderContext } from "./contexts/RenderProvider";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Shipment from "./pages/shipment/Shipment";

function App() {
  const { render } = useContext(RenderContext);
  return (
    <>
      <Layout>
        {
          render === "Home" ? <Home/> : <Shipment/>
      }
      </Layout>
    </>
  )
}

export default App;
