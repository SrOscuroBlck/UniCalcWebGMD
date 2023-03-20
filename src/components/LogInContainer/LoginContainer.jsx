import { useState, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "./LoginStyle.css";

export const LoginContainer = () => {
  //Context variables
  const { signUp } = useAuth();

  // Regex for email and password.
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const PASSWORD_REGEX = /^(?=.*?[#?!@$%^&/*-])/;

  // State for email, username and password.
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Errors and notifications.
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [fillAllFieldsError, setFillAllFieldsError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [generalError, setGeneralError] = useState(false);

  // useRef for the the change of the container.
  const [isSignUp, setIsSignUp] = useState(false);
  const containerRef = useRef(null);
  function toggleSignUp() {
    setIsSignUp(!isSignUp);
    if (containerRef.current) {
      containerRef.current.classList.toggle("right-panel-active");
    }
  }

  // Function to add a new register.

  const addRegister = async (e) => {
    e.preventDefault();

    // Error management.

    if (email === "" || password === "" || userName === "") {
      setFillAllFieldsError(true);
      setTimeout(() => {
        setFillAllFieldsError(false);
      }, 5000);
      return;
    } else {
      if (!EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }, 5000);
        return;
      } else if (EMAIL_REGEX.test(email) && !PASSWORD_REGEX.test(password)) {
        setPasswordError(true);
        setTimeout(() => {
          setPasswordError(false);
        }, 5000);
        return;
      } else if (!EMAIL_REGEX.test(email) && !PASSWORD_REGEX.test(password)) {
        setGeneralError(true);
        setTimeout(() => {
          setGeneralError(false);
        }, 5000);
        return;
      }
    }

    // If there is no error, the register is added.

    try {
      await signUp(email, password, userName).finally(() => {
        setRegisterSuccess(true);
        setTimeout(() => {
          setRegisterSuccess(false);
        }, 5000);
        setEmail("");
        setPassword("");
        setUserName("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Error when the password is not properly written */}
      {passwordError && (
        <div className="notification" id="warn-notification">
          La contraseña debe tener al menos un caracter especial. Por ejemplo:
          #, ?, !, @, $, %, ^, &, /, * y -
        </div>
      )}

      {/* Error when the email is not properly written */}
      {emailError && (
        <div className="notification" id="warn-notification">
          El email no es válido.
        </div>
      )}

      {/* Both of them have an error */}
      {generalError && (
        <div className="notification" id="warn-notification">
          La contraseña debe tener al menos un caracter especial. Por ejemplo:
          #, ?, !, @, $, %, ^, &, /, * y -
          <br />
          El email no es válido.
        </div>
      )}

      {/* Error when the user doesn't fill all the fields */}

      {fillAllFieldsError && (
        <div className="notification" id="warn-notification">
          Por favor, rellena todos los campos.
        </div>
      )}

      {/* Notification when the email has been sent succesfully */}
      {registerSuccess && (
        <div className="notification" id="success-notification">
          You have been registered successfully.
        </div>
      )}

      <div className="backRegister">
        <center>
          <div className="container" id="RegisterContainer" ref={containerRef}>
            <div
              className={`form-container ${
                isSignUp ? "sign-up-container" : "sign-in-container"
              }`}
            >
              <form action="#">
                <h1>{isSignUp ? "Crea tu Cuenta" : "Inicia Sesión"}</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                {isSignUp ? (
                  <>
                    <span>o usa tu email para registrarte</span>
                    <input
                      type="text"
                      placeholder="Nombre de Usuario"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </>
                ) : (
                  <span>o usa tu cuenta</span>
                )}
                <input
                  type="email"
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <button onClick={addRegister}>Registrate</button>}
                {!isSignUp && (
                  <>
                    <a href="#">Olvidaste tu Contraseña?</a>
                    {/* Boton para iniciar sesion*/}
                    <button>Iniciar Sesión</button>
                  </>
                )}
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Bienvenido de Vuelta!</h1>
                  <p>
                    Para ver tu contenido inicia sesión con tus datos personales
                  </p>
                  <button className="ghost" onClick={toggleSignUp} id="signIn">
                    Inicia Sesión
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hola!</h1>
                  <p>Ingresa tus datos persononales para registrarte</p>
                  <button className="ghost" onClick={toggleSignUp} id="signUp">
                    Registrarme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
