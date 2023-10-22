import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
   

    // optional: Add validation

    if (isLogin) {
    } else {
      
      fetch(

        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcyqi2t1KKsniE8q1DWoge17LEVLNT_ng',
        {

          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        
        }

        
      ).then((res) => {
        if (res.ok) {
          setIsLoading(false); // ...
        } else {
          return res.json().then((data) => {
            // show an error modal 
            setIsLoading(false);
            alert(data.error.message);
            console.log(data);
            setIsLoading(false);
          });
        }
      }).finally(() => setIsLoading(false));
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
         { isLoading && <h1>loading..........</h1>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
