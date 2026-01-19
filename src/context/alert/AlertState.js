import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = ({ children }) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // SET ALERT
  const setAlert = (message) => {
    dispatch({ type: SET_ALERT, payload: message });
    setTimeout(() => {
      removeAlert();
    }, 5000);
  };

  // REMOVE ALERT
  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
        removeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
