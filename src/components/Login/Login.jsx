import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../Login/LoginForm/LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound/NotFound';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to='/conta' />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
