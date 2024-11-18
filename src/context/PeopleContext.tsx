import { createContext, ReactNode, useMemo } from 'react';
import { usePeople } from '../hooks/usePeople';
import { Person } from '../types';
import { usePeopleRouting } from '../hooks/usePeopleRouting';

interface IPeopleContext {
  people: Person[];
  isLoading: boolean;
  error: string;
  personId: string | undefined;
}

export const PeopleContext = createContext<IPeopleContext>({
  people: [],
  isLoading: true,
  error: '',
  personId: undefined,
});

export const PeopleProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const { people, isLoading, error } = usePeople();
  const { personId } = usePeopleRouting();

  const store = useMemo(
    () => ({ people, isLoading, error, personId }),
    [people, isLoading, error, personId],
  );

  return (
    <PeopleContext.Provider value={store}>{children}</PeopleContext.Provider>
  );
};
