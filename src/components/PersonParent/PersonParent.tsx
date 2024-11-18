import { FC } from 'react';
import cn from 'classnames';

import { Person } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  parent: Person;
}

export const PersonParent: FC<Props> = ({ parent }) => (
  <Link
    to={`/people/${parent.slug}`}
    className={cn('', {
      'has-text-danger': parent.sex === 'f',
    })}
  >
    {parent.name}
  </Link>
);
