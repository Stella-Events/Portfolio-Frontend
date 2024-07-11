import Logbac from "../assets/images/logbac.jpg"
import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta.png"
import twitter from "../assets/images/twitter.png"



const Signin = () => {
  return (
    <div>
      <div className="h-[700px] w-max-full bg-[#f8f8fa] flex flex-col items-center justify-center gap-8 bg-[url('./assets/images/logbac.jpg')] bg-cover bg-center">

        <div className="flex flex-col items-center justify-center h-[550px] w-96 bg-white/70 rounded-lg border-2 border-purple-950">

          <h4 className="text-4xl font-bold">Sign In</h4>
          <div>
            <form className="w-[300px] mx-auto p-4">

              <div className="mb-8">
                {/* USERNAME */}
                <label
                  htmlFor="name"
                  className="text-gray-500 text-2 mb-1 mr-0">

                </label>
                username
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="h-9 bg-[#f1f1f1] w-full mt-2 border-2  rounded-lg"
                  placeholder="input username..." />
              </div>

              <div className="mb-8">
                {/* PASSWORD */}
                <label
                  htmlFor="name"
                  className="text-gray-500 text-2 mb-1 mr-0">

                </label>
                 password
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="h-9 bg-[#f1f1f1] w-full mt-2 rounded-lg"
                  placeholder="input password..." />
              </div>

              <div>
                {/* SUBMIT BUTTON */}
                <div className="flex justify-center">

                  <input
                    type="submit" value="SignIn" className="h-9 bg-[#7848f4] w-40 text-white rounded-lg" placeholder="Create Event">
                  </input>
                </div>
              </div>
            </form>
          </div>
          <div className="size-[80px] flex flex-row justify-between">
            <span className="size-[44px]"><img src={facebook} alt="blue-icon-of-facebook" /></span>
            <span className="size-[44px]"><img src={insta} alt="logo-of-instagram" /></span>
            <span className="size-[35px] mt-1"><img src={twitter} alt="new-logo-of-twitter" /></span>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Signin