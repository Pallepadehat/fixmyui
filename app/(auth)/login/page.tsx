import { auth } from "@/auth";
import LoginPage from "@/components/auth/login-page";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return <LoginPage />;
};

export default Login;
