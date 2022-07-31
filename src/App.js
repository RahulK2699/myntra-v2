import Breadcrumb from "./components/BreadCrumb/Breadcrumb";
import Navbar from "./pages/navbar/Navbar";
function App() {
  return (
    <div className="">
      <Navbar />
      <Breadcrumb
        items={["home", "clothing"]}
        currentPage="Men-T-shirt"
        path={"https://localhost:3000/home/about"}
      />
    </div>
  );
}

export default App;
