import { useParams } from 'react-router-dom';

import { People } from '../../components/People/People';
import { Title } from '../../shared/Title';

const PeoplePage = () => {
  const { personId } = useParams();
  return (
    <>
      <Title text="People Page" />
      <People personId={personId} />
    </>
  );
};

export default PeoplePage;
