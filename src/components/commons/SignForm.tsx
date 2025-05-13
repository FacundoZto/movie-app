import Link from "next/link";
import SignButton from '@/components/commons/SignButton';
//import GoogleButton from '@/components/commons/GoogleButton';
import { SignFormProps } from '@/interfaces/SignFormProps';

const SignForm = (props: SignFormProps) => {
  const {user, title, subtitle, linkText, linkTextHref, handleSubmit, handleChange, loading, error, buttonText, googleSignIn} = props;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-700 dark:text-white">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm/6 text-gray-500 dark:text-white">
          {subtitle}
          <Link href={linkTextHref} className="font-semibold text-teal-500 hover:text-teal-400">
            {linkText}
          </Link>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-700 dark:text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={user.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-700 dark:text-white">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={user.password}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <SignButton loading={loading}>
              {buttonText}
            </SignButton>
            {error && (
              <p className="mt-2 text-sm text-red-600 text-center">
                {error}
              </p>
            )}
          </div>
        </form>

        {/* <div className="flex flex-col">
          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-white">
            Or continue with
          </p>
          <GoogleButton onClick={googleSignIn} />
        </div> */}
      </div>
    </div>
  );
};

export default SignForm;