import { Route, Routes } from "react-router-dom";
import { Error } from "src/pages/Error/Error";
import { Home } from "src/pages/Home/Home";
import { Categories } from "./pages/Categories/Categories";
import { Layout } from "src/components/Layout/Layout";
import { CatPasta } from "src/components/categoriesProd/CatPasta/CatPasta";
import { CatSoup } from "src/components/categoriesProd/CatSoup/CatSoup";
import { Contacts } from "src/pages/Contacts/Contacts";
import { Actions } from "src/pages/Actions/Actions";

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='cat' element={<Categories />}>
            <Route path='pasta' element={<CatPasta />} />
            <Route path='soup' element={<CatSoup />} />
          </Route>
          <Route path='contacts' element={<Contacts />} />
          <Route path='actions' element={<Actions />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
