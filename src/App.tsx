// import { Route, Routes } from "react-router-dom";
import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { Main } from "./modules/Main/Main";

const App = () => {
  return (
    // <Routes>
    //   <Route
    //     path='*'
    //     element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
    //     } />
    // </Routes>
  );
}

export default App;
