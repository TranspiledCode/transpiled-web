import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #3f51b5;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #303f9f;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
  text-align: center;
`;

const SignupLink = styled.p`
  margin-top: 15px;
  text-align: center;
  a {
    color: #3f51b5;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page after successful login
      navigate('/');
    } catch (err) {
      // Handle errors here
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
      console.error('Login Error:', err);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit">Sign In</Button>
        </Form>
        <SignupLink>
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </SignupLink>
      </FormWrapper>
    </Container>
  );
}

export default LoginPage;
