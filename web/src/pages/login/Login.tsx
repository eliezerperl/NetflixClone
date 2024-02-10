import LoginContainer from '@/pages/login/LoginContainer';
import AuthLayout from '@/utils/components/shared/AuthLayout';

const Login = () => {
  return (
    <div>
      <AuthLayout
        footerChildren={
          <>
            <a href="">Contact us</a>
            <a href="">Contact us</a>
            <a href="">Contact us</a>
            <a href="">Contact us</a>
            <a href="">Contact us</a>
          </>
        }>
        <div className="flex justify-center items-center">
          <LoginContainer />
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
