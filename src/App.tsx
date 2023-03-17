import { Route, Routes } from "react-router-dom";
import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { Error } from "src/pages/Error/Error";
import { Main } from "src/modules/Main/Main";
import { Home } from "src/pages/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cat/*' element={<Main />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
