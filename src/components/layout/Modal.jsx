import React from 'react';
import { useAppContext } from '../../context/app/appContext';
import Modal from 'react-modal';
import LoginView from '../pages/LoginView';

const ModalComponent = () => {
  const { shouldShowLogin, deactivateLogin } = useAppContext();

  return (
    <Modal
      isOpen={shouldShowLogin}
      onRequestClose={deactivateLogin}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      contentLabel="loginModal"
      style={{
        overlay: {
          paddingTop: '2em',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          marginRight: '-50%',
        },
      }}
    >
      <LoginView />
    </Modal>
  );
};

export default ModalComponent;
