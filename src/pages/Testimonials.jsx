import { useState } from 'react';
import styled from '@emotion/styled';
import { useAuth } from 'context/AuthContext';
import FullScreenOverlay from 'molecules/FullScreenOverlay';

const StyledTestimonoals = styled.div`
  background-color: black;
  color: #fff;
  padding: 20rem;
  font-size: 2rem;
  height: 100vh;
`;

const Testimonoals = () => {
  const { isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('This is some editable text.');
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    setText(editText);
    setShowModal(false);
  };

  const handleCancel = () => {
    setEditText(text);
    setShowModal(false);
  };

  return (
    <StyledTestimonoals>
      <p>
        {text}
        {isAuthenticated && (
          <span
            style={{ cursor: 'pointer', marginLeft: '10px' }}
            onClick={() => {
              setEditText(text);
              setShowModal(true);
            }}
          >
            ✏️
          </span>
        )}
      </p>

      {showModal && isAuthenticated && (
        <FullScreenOverlay>
          <div
            style={{
              background: '#333',
              padding: '2rem',
              borderRadius: '0.5rem',
              maxWidth: '600px',
              width: '90vw',
            }}
          >
            <h2 style={{ marginTop: 0, color: '#fff' }}>Edit Content</h2>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{ width: '100%', height: '10rem', marginBottom: '1rem' }}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel} style={{ marginLeft: '1rem' }}>
              Cancel
            </button>
          </div>
        </FullScreenOverlay>
      )}
    </StyledTestimonoals>
  );
};

export default Testimonoals;
