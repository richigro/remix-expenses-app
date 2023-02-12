import AuthForm from "~/components/auth/AuthForm";
import AuthStyles from "~/styles/auth.css";

export const links = () => [{ rel: "stylesheet", href: AuthStyles }];

const AuthPage = () => {
  return <AuthForm />;
};

export default AuthPage;
