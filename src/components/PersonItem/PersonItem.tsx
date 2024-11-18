import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Person } from '../../types';
import { PersonParent } from '../PersonParent/PersonParent';

interface Props {
  person: Person;
  personId: string | undefined;
}

export const PersonItem: FC<Props> = ({ person, personId }) => {
  const {
    slug,
    name,
    sex,
    born,
    died,
    motherName,
    fatherName,
    mother,
    father,
  } = person;

  const personMother = motherName ? motherName : '-';
  const personFather = fatherName ? fatherName : '-';

  const MotherView = mother ? <PersonParent parent={mother} /> : personMother;

  const FatherView = father ? <PersonParent parent={father} /> : personFather;

  return (
    <tr
      data-cy="person"
      className={cn({ 'has-background-warning': personId === slug })}
    >
      <td>
        <Link
          to={`/people/${slug}`}
          className={cn('', {
            'has-text-danger': sex === 'f',
          })}
        >
          {name}
        </Link>
      </td>
      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>{MotherView}</td>
      <td>{FatherView}</td>
    </tr>
  );
};

// className="has-background-warning"
