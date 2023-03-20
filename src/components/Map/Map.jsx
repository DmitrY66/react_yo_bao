import st from './Map.module.css';
import googleMap from 'src/img/google-map-img.jpg'

export const Map = () => {

  return (
    <div className={`${st.map} container`}>
      <img className={st.map__img} src={googleMap} alt="карта google" />
    </div>
  )
};
