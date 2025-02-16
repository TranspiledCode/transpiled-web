// EditableContent.jsx
import React, { useState, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import useContentUpdate from 'hooks/useContentUpdate';

import { useAuth } from 'context/AuthContext';
import GlobalContext from 'context/GlobalContext';
import FullScreenOverlay from 'molecules/FullScreenOverlay';
import Button from 'atoms/Button';

const EditableContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const HoverOverlayContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover .overlay {
    opacity: 1;
    pointer-events: all;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background-color: rgba(255, 193, 7, 0.11);
  border: 1px solid #ffc107;
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const ModalContainer = styled.div`
  background: #333;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 800px;
  width: 90vw;
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  color: #fff;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
  display: block;
`;

const ButtonBar = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const CancelButton = styled.button`
  background-color: #777;
  color: white;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

const ContentPreviewWrapper = styled.div`
  display: flex;
  margin-bottom: 10rem;
  max-width: 800px;
  width: 90vw;
`;
const extractTextContent = (children) => {
  if (typeof children === 'string') {
    return children;
  }

  if (typeof children === 'number') {
    return children.toString();
  }

  if (Array.isArray(children)) {
    return children
      .map((child) => extractTextContent(child))
      .filter(Boolean)
      .join('');
  }

  if (React.isValidElement(children)) {
    // If the child is a React element, get its children's text
    return extractTextContent(children.props.children);
  }

  // For other types (like objects), try to find a text property
  if (children && typeof children === 'object') {
    if ('text' in children) return children.text;
    if ('message' in children) return children.message;
    if ('content' in children) return children.content;
  }

  return '';
};

const EditableContent = ({ children, contentType, fieldPath, documentId }) => {
  const { isAuthenticated } = useAuth();
  const { isEditable } = useContext(GlobalContext);
  const { handleSave: contentUpdateHandler } = useContentUpdate(contentType);

  const { originalChild, originalText } = useMemo(() => {
    const childArray = React.Children.toArray(children);

    if (childArray.length !== 1) {
      throw new Error('EditableContent expects exactly one child element.');
    }

    const originalChild = childArray[0];
    const originalText = extractTextContent(originalChild);

    return { originalChild, originalText };
  }, [children]);

  const [text, setText] = useState(originalText);
  const [editText, setEditText] = useState(originalText);
  const [showModal, setShowModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Update text when original content changes
  useEffect(() => {
    setText(originalText);
    setEditText(originalText);
  }, [originalText]);

  if (!isAuthenticated || !isEditable) {
    return originalChild;
  }

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await contentUpdateHandler({
        id: documentId,
        fieldPath,
        text: editText,
      });
      setText(editText);
      setShowModal(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error in EditableContent save:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditText(text);
    setShowModal(false);
  };

  const handleOpenEditor = () => {
    setEditText(text);
    setShowModal(true);
  };

  const renderContent = (contentText) => {
    if (typeof originalChild === 'string') {
      return contentText;
    }

    return React.cloneElement(originalChild, {
      ...originalChild.props,
      children: contentText,
    });
  };

  return (
    <EditableContainer>
      <HoverOverlayContainer>
        {renderContent(text)}
        <Overlay className="overlay">
          <Button variant="warning" size="small" onClick={handleOpenEditor}>
            Edit
          </Button>
        </Overlay>
      </HoverOverlayContainer>

      {showModal && (
        <FullScreenOverlay>
          <ContentPreviewWrapper>
            {renderContent(editText)}
          </ContentPreviewWrapper>
          <ModalContainer>
            <ModalTitle>Edit Content</ModalTitle>
            <TextArea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <ButtonBar>
              <SaveButton onClick={handleSave} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save'}
              </SaveButton>
              <CancelButton onClick={handleCancel} disabled={isSaving}>
                Cancel
              </CancelButton>
            </ButtonBar>
          </ModalContainer>
        </FullScreenOverlay>
      )}
    </EditableContainer>
  );
};

EditableContent.propTypes = {
  children: PropTypes.node.isRequired,
  contentType: PropTypes.string,
  fieldPath: PropTypes.string,
  documentId: PropTypes.string,
};

export default EditableContent;
