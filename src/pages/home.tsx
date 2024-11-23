import { useNavigate } from "react-router-dom";
import { PATHS } from "../constants/paths";

const Home = () => {
	const navigate = useNavigate();

  const handleLogOut = () => {
		navigate(PATHS.logIn)
	}
	
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Welcome Back!</h2>
        <p className="text-center text-gray-700 mb-6">
          You are successfully logged in. Enjoy your experience!
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleLogOut}
            className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
