import st from './SectionProductCards.module.css';
import { CatPasta } from 'src/components/categoriesProd/CatPasta/CatPasta';
import { Route, Routes } from 'react-router-dom';
import { CatSoup } from 'src/components/categoriesProd/CatSoup/CatSoup';
import { Error } from 'src/pages/Error/Error';
// import Error from 'src/modules/Error404/Error404';

export const SectionProductCards = () => {

  return (
    <section className={`${st.section_product_cards} container`}>
      <Routes>
        <Route path='/' element={<CatPasta />} />
        <Route path='/pasta' element={<CatPasta />} />
        <Route path='/soup' element={<CatSoup />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </section>
  )
};
