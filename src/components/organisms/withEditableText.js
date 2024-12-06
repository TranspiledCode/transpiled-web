import React, { useState } from 'react';
import { useAuth } from 'context/AuthContext';
import FullScreenOverlay from 'molecules/FullScreenOverlay';

function withEditableText(WrappedComponent) {
  return function EditableComponent({ initialText }) {
    const { isAuthenticated } = useAuth();
    const [text, setText] = useState(initialText);
    const [editText, setEditText] = useState(text);
    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
      setText(editText);
      setShowModal(false);
    };

    const handleCancel = () => {
      setEditText(text);
      setShowModal(false);
    };

    return (
      <div style={{ position: 'relative' }}>
        {/* Display the final text */}
        <WrappedComponent text={text} />

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
              <div
                className="preview-label"
                style={{ color: '#aaa', marginBottom: '0.5rem' }}
              >
                Live Preview:
              </div>
              {/* Show preview of the edited text */}
              <WrappedComponent text={editText} />

              <div style={{ marginTop: '1rem' }}>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel} style={{ marginLeft: '1rem' }}>
                  Cancel
                </button>
              </div>
            </div>
          </FullScreenOverlay>
        )}
      </div>
    );
  };
}

export default withEditableText;
