// используется на странице "Наши акции"

import { ActionCard } from 'src/components/ActionCard/ActionCard';
import { v4 as uuidv4 } from 'uuid';

const setActionList = (dataList) => {

  return dataList.map(item =>
    <ActionCard
      actionphoto={item.image ? item.image : '../assets/img/no-photo.svg'}
      title={item.title}
      description={item.description}
      key={uuidv4()}
      id={item.id}
    />
  );
};

export default setActionList;
