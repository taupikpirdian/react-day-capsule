import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    return (
        <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <InputForm title="Email" type="email" placeholder="Email" name="email" />
                <InputForm title="Password" type="password" placeholder="Password" name="password" />
            </div>

            <div className="inline-flex items-center justify-center w-full">
                <hr className="hr-c1" />
                <span className="text-white mr-2">or</span>
                <hr className="hr-c1" />
            </div>

            <button className="form-google hover:bg-[#171F2A]">
                <img className="img-google" src="assets/images/logo/g-logo.png" alt="logo" />
                <label className="ml-2">Sign in with Google</label>
            </button>

            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="fc-checkbox" required />
                </div>
                <label htmlFor="remember" className="ms-2 label">Remember me</label>
            </div>

            <Button>Sign in to your account</Button>
        </form>
    )
}

export default FormLogin;