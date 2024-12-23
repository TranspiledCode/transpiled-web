import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useToast } from 'context/ToastContext'; // Import useToast hook

// Main container with background gradient
const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Form card
const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 3rem 2rem;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 4px;
  font-size: 1.4rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.orange};
    outline: none;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orangeDark};
  }
`;

const SignupLink = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.4rem;

  a {
    color: ${({ theme }) => theme.colors.darkBlue};
    text-decoration: none;
  }
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page after successful login
      navigate('/');
    } catch (err) {
      // Handle errors
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/user-disabled':
          setError('User account is disabled.');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        default:
          setError('Failed to sign in. Please try again.');
      }
      addToast(err.code, 'danger');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit">Sign In</Button>
        </Form>

        <SignupLink>
          <Link to="/ ">Back to Home</Link>
        </SignupLink>
      </FormWrapper>
    </Container>
  );
}

export default LoginPage;
