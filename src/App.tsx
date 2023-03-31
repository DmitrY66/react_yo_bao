import { Provider } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { Error404 } from "src/pages/Error404/Error404";
import { Home } from "src/pages/Home/Home";
import { Categories } from "./pages/Categories/Categories";
import { Layout } from "src/components/Layout/Layout";
import { CatPasta } from "src/components/categoriesProd/CatPasta/CatPasta";
import { CatSoup } from "src/components/categoriesProd/CatSoup/CatSoup";
import { Contacts } from "src/pages/Contacts/Contacts";
import { Actions } from "src/pages/Actions/Actions";
import { SectionCart } from "src/modules/SectionCart/SectionCart";
import { store } from 'src/store/index';

const App = () => {

  return (
    <Provider store={store}>
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
            <Route path='cart' element={<SectionCart />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </>
    </Provider>
  );
}

export default App;
