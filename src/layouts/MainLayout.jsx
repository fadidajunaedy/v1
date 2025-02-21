import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home/Home";

const MainLayout = () => {
  return (
    <>
      <div className="container flex flex-col lg:flex-row">
        <Header />
        <main className="lg:ml-auto lg:w-1/2 overflow-x-hidden overflow-y-auto flex flex-col gap-12 pt-12 pb-4 lg:py-24">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
