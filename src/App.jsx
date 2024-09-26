function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#111827] p-0">
      <div className="flex w-full h-full">
        <div className="w-full justify-center items-center p-12">
          <div className="w-full h-full bg-[#1F2937] rounded-xl p-10">
            
            <div class="grid grid-cols-1">
              <div>         
                <img className="img-logo" src="assets/images/logo/logo.png" alt="logo" />
                <p className="text-white text-xl font-bold">Day Capsule</p>
                <p className="f-weight-light">track, reflect, improve</p>
              </div>
            </div>

            <div class="grid grid-cols-1 mt-6 mb-4">
              <p className="text-white text-xl font-bold">Welcome Back</p>
              <p className="f-weight-light">You can sign in to get started</p>
            </div>

            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" className="bg-gray-50 border border-gray-300 rounded-lg p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F6A417] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required/>
                  </div>
                  <div>
                      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" className="bg-gray-50 border border-gray-300 rounded-lg p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F6A417] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Password" required/>
                  </div>
                </div>
                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
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
        <div className="w-full flex justify-center items-center">
          <img src="assets/images/login/think.svg" alt="think" />
        </div>
      </div>
    </div>
  )
}

export default App
