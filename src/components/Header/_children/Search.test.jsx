import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AlertContext from '../../../context/alert/alertContext';
import AppContext from '../../../context/app/appContext';
import Search from './Search';
vi.mock('react-router-dom', () => ({
  useHistory: () => [],
  useLocation: () => ({ pathname: '/player' }),
}));

describe('Search', () => {
  const setAlert = vi.fn();
  const initApis = vi.fn();
  const getResultVideos = vi.fn();

  const renderComponent = (contextValue = {}) => {
    render(
      <AlertContext.Provider value={{ setAlert }}>
        <AppContext.Provider
          value={{
            initApis,
            getResultVideos,
            ...contextValue,
          }}
        >
          <Search />
        </AppContext.Provider>
      </AlertContext.Provider>,
    );
  };

  it('calls initApis once at first render', () => {
    renderComponent();
    expect(initApis).toHaveBeenCalledTimes(1);
  });

  it('calls getResultVideos onSubmit with the input text', () => {
    const query = 'Bohemian Rhapsody';
    renderComponent();
    userEvent.type(screen.getByRole('textbox'), query);
    userEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(getResultVideos).toHaveBeenCalledWith(query);
  });

  it('calls setAlert with a message when an empty query is submitted', () => {
    const query = '';
    renderComponent();
    userEvent.type(screen.getByRole('textbox'), query);
    userEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(getResultVideos).not.toHaveBeenCalled();
    expect(setAlert).toHaveBeenCalledWith('Enter a search text');
  });
});
