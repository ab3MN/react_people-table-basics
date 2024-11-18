import { Loader } from '../Loader';
import { ErrorNotification } from '../../shared/ErrorNotification';
import { PersonItem } from '../PersonItem/PersonItem';
import { usePeople } from '../../hooks/usePeople';
import { FC } from 'react';

interface Props {
  personId: string | undefined;
}

export const People: FC<Props> = ({ personId }) => {
  const { people, isLoading, error } = usePeople();

  const isPeopleEmpthy = !people.length && !isLoading;

  const getPeopleView = () => {
    if (error) {
      return (
        <ErrorNotification dataCy="peopleLoadingError" errorMessage={error} />
      );
    }

    if (isPeopleEmpthy) {
      return <p data-cy="noPeopleMessage">There are no people on the server</p>;
    }

    if (!!people.length) {
      return (
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Born</th>
              <th>Died</th>
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>

          <tbody>
            {people.map(person => (
              <PersonItem
                key={person.slug}
                person={person}
                personId={personId}
              />
            ))}
          </tbody>
        </table>
      );
    }

    return null;
  };

  return (
    <div className="block">
      <div className="box table-container">
        {isLoading && <Loader />}

        {getPeopleView()}
      </div>
    </div>
  );
};
