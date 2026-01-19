import { createContext, useContext } from 'react';

const alertContext = createContext();

export const useAlertContext = () => {
  const context = useContext(alertContext);
  if (context === undefined) {
    throw new Error(
      'useAlertContext must be used within AlertState component tree',
    );
  }
  return context;
};

export default alertContext;
