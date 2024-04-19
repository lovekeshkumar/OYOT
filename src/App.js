import Header from "./components/header";
import "./App.css";
import LeftDrawer from "./components/drawer";
import ProductList from "./components/products";

function App() {
  return (
    <div className="App">
      <Header />
       <LeftDrawer />
      <ProductList/>
    </div>
  );
}

export default App;
