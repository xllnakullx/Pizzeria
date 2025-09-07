import { useState } from 'react';
import { Input } from './Input';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [isDataValid, setIsDataValid] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;
  const validateConfirmPassword = (password, confirmPassword) =>
    password === confirmPassword;

  const handleRegister = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      setConfirmPasswordError(true);
      isValid = false;
    } else {
      setConfirmPasswordError(false);
    }

    setIsDataValid(isValid);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-medium text-center mb-2">¡Regístrate!</h1>
        <p className="text-center font-semibold text-gray-700 mb-4">
          ¡Bienvenido a la mejor pizzería de la ciudad!
        </p>
        <div className="w-full border-t border-gray-300 mb-4"></div>

        <form onSubmit={handleRegister} className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={emailError && 'Correo electrónico inválido'}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={
              passwordError &&
              'La contraseña debe tener al menos 6 caracteres'
            }
          />
          <Input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMessage={confirmPasswordError && 'Las contraseñas no coinciden'}
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md mt-2"
          >
            Registrarme
          </button>
        </form>

        {isDataValid && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4">
            <p className="font-semibold">¡Registro exitoso!</p>
            <p>¡Bienvenido a la mejor pizzería de la ciudad!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
