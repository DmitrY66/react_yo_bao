import { ProductCard } from '../../components/ProductCard/ProductCard';
import st from './SectionProductCard.module.css';
import dataJson from '../../data/data.json';

export const SectionProductCard = () => {
  const dataListPasta = dataJson[0].pasta;

  return (
    // <section className={st.section_product_card}>
    <section className={`${st.section_product_card} container`}>
      <h2>Паста</h2>
      <ul className={st.product_card_list}>
        {dataListPasta.map(item =>
          < ProductCard
            productphoto={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            key={item.id}
          />
        )}
      </ul>
    </section>
  )
};
