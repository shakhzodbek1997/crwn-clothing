import SignInForm from '../../components/sign-in-form/sign-in-form.coponent';
import SignUpForm from '../../components/sign-up-form/sign-up-form.coponent'
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;