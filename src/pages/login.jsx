import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import '../assets/css/auth.css'

const LoginPage = () => {
    return (
        <AuthLayout title="Welcome back!" text="Sign in to your account" pathImg="assets/images/login/think.svg">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;