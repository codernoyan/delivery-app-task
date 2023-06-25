import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Shipment from "./pages/shipment/Shipment";

function App() {
  return (
    <div>
      <Layout>
        <Home />
        <Shipment/>
      </Layout>
    </div>
  )
}

export default App;
