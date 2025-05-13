'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SignForm from '@/components/commons/SignForm';

const RegisterPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    setLoading(false);

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      console.error('Error:', data.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <SignForm
      title="Create your account"
      subtitle={"Already have an account? "}
      linkText="Log in"
      linkTextHref="/login"
      buttonText="Sign up"
      handleChange={handleChange}
      handleSubmit={handleRegister}
      user={user}
      loading={loading}
      error={error}
      googleSignIn={() => signIn('google')}
    />
  )
};

export default RegisterPage;