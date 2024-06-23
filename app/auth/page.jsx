import { redirect } from "next/navigation";
const LoginPage = () => {
  redirect("/auth/login");
  return <div></div>;
};

export default LoginPage;
