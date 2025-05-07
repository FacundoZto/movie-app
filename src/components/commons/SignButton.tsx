type SignButtonProps = {
  loading: boolean;
  children: React.ReactNode;
}

const SignButton = (props: SignButtonProps) => {
  const { loading, children } = props;

  return (
    <button
      type="submit"
      disabled={loading}
      className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
    >
      {loading ? (
        <svg className="animate-spin h-6 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default SignButton;