'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SignForm from '@/components/commons/SignForm';

const LoginPage = () => {
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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await signIn('credentials', {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.ok) {
      router.push('/');
    } else {
      console.error('Error:', res?.error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <SignForm
      title="Sign in to your account"
      subtitle={"Don’t have an account? "}
      linkText="Register"
      linkTextHref="/register"
      buttonText="Sign in"
      handleChange={handleChange}
      handleSubmit={handleLogin}
      user={user}
      loading={loading}
      error={error}
      googleSignIn={() => signIn('google')}
    />
  )
};

export default LoginPage;