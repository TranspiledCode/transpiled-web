import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'config/firebase';
import { useToast } from 'context/ToastContext';

import Input from 'atoms/Input';
import Button from 'atoms/Button';

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.fuchsia}
  );
`;

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
`;

const FormInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  button {
    align-self: flex-end;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const NavigationLink = styled(Link)`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-decoration: none;
  align-self: center;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      addToast('Successfully logged in!', 'success');
      navigate('/');
    } catch (err) {
      let errorMessage;

      switch (err.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'User account is disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        default:
          errorMessage = 'Failed to sign in. Please try again.';
      }

      addToast(errorMessage, 'danger');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginFormWrapper>
      <LoginFormStyled onSubmit={handleSubmit}>
        <FormInputs>
          <Input
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Navigation>
            <NavigationLink to="/">Back to Home</NavigationLink>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              icon="FaArrowRight"
              size="small"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>
          </Navigation>
        </FormInputs>
      </LoginFormStyled>
    </LoginFormWrapper>
  );
}

export default LoginPage;
