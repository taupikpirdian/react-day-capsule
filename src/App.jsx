function App() {
  return (
    <div className="flex justify-center items-center p-0">
        <div className="w-full justify-center items-center p-12">
          <div className="w-full h-full bg-[#1F2937] rounded-xl p-10 h-auto">
            <div class="grid grid-cols-1">
              <div className="flex items-center">         
                <img className="img-logo" src="assets/images/logo/logo.png" alt="logo" />
                <div className="flex flex-col ml-3">
                  <p className="text-white text-xl font-bold">Day Capsule</p>
                  <p className="f-weight-light">track, reflect, improve</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 mt-6 mb-4">
              <p className="text-white text-xl font-bold">Welcome Back</p>
              <p className="f-weight-light">You can sign in to get started</p>
            </div>

            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                      <label for="first_name" class="label">Email</label>
                      <input type="email" className="form-control" placeholder="Email" required/>
                  </div>
                  <div>
                      <label for="last_name" class="label">Password</label>
                      <input type="password" className="form-control" placeholder="Password" required/>
                  </div>
                </div>

                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mr-2" />
                    <span className="text-white">or</span>
                    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ml-2" />
                </div>
                
                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" class="fc-checkbox" required />
                    </div>
                    <label for="remember" class="ms-2 label">Remember me</label>
                </div>
                <button 
                    type="submit" 
                    class="text-white bg-[#B6790B] hover:bg-[#976201] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                    Sign in to your account
                </button>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center items-center hidden sm:flex pt-[3%]">
          <img src="assets/images/login/think.svg" alt="think" />
        </div>
    </div>
  )
}

export default App
