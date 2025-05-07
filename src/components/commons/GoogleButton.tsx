import { FcGoogle } from "react-icons/fc";

type GoogleButtonProps = {
  loading?: boolean;
  onClick: () => void;
}

const GoogleButton = (props: GoogleButtonProps) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-x-2 text-gray-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-semibold rounded-lg text-sm py-2 mb-2 mt-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
    >
      <FcGoogle size={24} />
      Google
    </button>
  );
};

export default GoogleButton;