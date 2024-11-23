import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PATHS } from '../constants/paths';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { isValidEmail } from '../utils';
import LoadingOverlay from '../components/loadingOverlay';
import { logInAsync } from '../services';

const SignupPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({ login: '', password: '', firstName: '', lastName: '' })
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleToggleShowPass = () => {
    setShowPass(prev => !prev)
  }

  const canTryToLogIn = useMemo(() => {
    return (
      isValidEmail(data.login) 
      && data.firstName
      && data.lastName
      && data.login === 'test@test.com'
      && data.password === 'admin'
    );
  }, [data.firstName, data.lastName, data.login, data.password]);
  
  const handleGoToLogIn = () => {
    navigate(PATHS.logIn)
  }

  const handleChange = (inp: 'login' | 'password' | 'firstName' | 'lastName') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setData((prev) => ({ ...prev, [inp]: value }));
  };

  const handleLogIn = async(ev: { preventDefault: () => void; }) => {
    try {
      ev.preventDefault()
      setLoading(true)
      await logInAsync()
      setLoading(false)
      navigate(PATHS.home)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {loading && <LoadingOverlay />}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center bg-white">
        <h1 className="text-3xl font-bold mb-4">Sing Up to Your Account</h1>
        <p className="text-gray-600 mb-6">Sing Up using social networks</p>

        <div className="flex gap-4 mb-8">
          <button type="button" onClick={handleLogIn} className="w-12 h-12 flex justify-center items-center bg-blue-700 text-white rounded-full">
           <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button type="button" onClick={handleLogIn} className="w-12 h-12 flex justify-center items-center bg-red-500 text-white rounded-full">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
          </button>
          <button type="button" onClick={handleLogIn} className="w-12 h-12 flex justify-center items-center bg-blue-600 text-white rounded-full">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </button>
        </div>

        <p className="text-gray-400 mb-4">OR</p>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <input
              onChange={handleChange('firstName')}
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg bg-gray-50"
            />
          </div>
          <div className="mb-4">
            <input
              onChange={handleChange('lastName')}
              type="First text"
              placeholder="Last Name"
              className="w-full p-3 border rounded-lg bg-gray-50"
            />
          </div>
          <div className="mb-4">
            <input
              onChange={handleChange('login')}
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg bg-gray-50"
            />
          </div>
          <div className="mb-6 relative">
            <input
              onChange={handleChange('password')}
              type={showPass ? 'text': 'password'}
              placeholder="Password"
              className="w-full p-3 border rounded-lg bg-gray-50"
            />
            <span onClick={handleToggleShowPass} className="absolute right-4 top-3 text-gray-500 cursor-pointer">
             <FontAwesomeIcon icon={faEye} size="1x" color={showPass ? 'blue' : undefined}  />
            </span>
          </div>
          <button 
            disabled={!canTryToLogIn} 
            onClick={handleLogIn}
            className={
              `w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 opacity-${canTryToLogIn ? 100 : 10}`
            }
            >
            Sing Up
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-green-400 to-blue-500 text-white p-20">
        <h2 className="text-3xl font-bold mb-4">Already have an account?</h2>
        <p className="text-center mb-6 max-w-md">
          Login to Your Account!
        </p>
        <button 
          onClick={handleGoToLogIn} 
          className="bg-white text-green-500 font-bold py-3 px-6 rounded-lg hover:bg-gray-100">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
