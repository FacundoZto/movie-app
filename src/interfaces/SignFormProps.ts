export type SignFormProps = {
  title: string;
  subtitle: string;
  linkText: string;
  linkTextHref: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  user: {
    email: string;
    password: string;
  };
  loading: boolean;
  error: string;
  buttonText: string;
  googleSignIn?: () => void;
}