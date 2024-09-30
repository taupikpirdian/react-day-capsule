const AuthLayout = (props) => {
    const { title, text, pathImg, children } = props;

    return (
        <div className="flex justify-center items-center pt-12">
            <div className="w-full justify-center items-center p-12">
                <div className="w-full h-full bg-[#1F2937] rounded-xl p-10 h-auto">
                    <div className="grid grid-cols-1">
                        <div className="flex items-center">
                            <img className="img-logo" src="assets/images/logo/logo.png" alt="logo" />
                            <div className="flex flex-col ml-3">
                            <p className="text-white text-xl font-bold">Day Capsule</p>
                            <p className="f-weight-light">track, reflect, improve</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-6 mb-10">
                        <p className="text-white text-xl font-bold">{title}</p>
                        <p className="f-weight-light">{text}</p>
                    </div>

                    {/* sign in form */}
                    {children}
                </div>
            </div>
            <div className="w-full flex justify-center items-center hidden sm:flex pt-[3%]">
                <img src={pathImg} alt="think" />
            </div>
        </div>
    )
}

export default AuthLayout;