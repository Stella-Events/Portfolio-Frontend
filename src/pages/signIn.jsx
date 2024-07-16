import Logbac from "../assets/images/logbac.jpg"
import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta.png"
import twitter from "../assets/images/twitter.png"
import { useForm } from "react-hook-form";
import { apiLogin } from "../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import {toast} from "react-toastify"



const Signin = () => {
  // Let isSubmitting = false;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  console.log(isSubmitting)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    //isSubmitting = true
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        // email: data.email, 
        userName: data.username,
        password: data.password
      });
      console.log("Response: ", res.data)
      toast.success(res.data)
      setTimeout(() =>{
        //redirect user to dashboard
      navigate("/dashboard")
      }, 8000)
      

      //isSubmitting = false
      setIsSubmitting(false)
      // console.log("Second: I got called"); 
    }
    catch (error) {
      console.log(error);
      toast.error(error);
      setIsSubmitting 
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="h-[700px] w-max-full bg-[#f8f8fa] flex flex-col items-center justify-center gap-8 bg-[url('./assets/images/logbac.jpg')] bg-cover bg-center">

        <div className="flex flex-col items-center justify-center h-[550px] w-96 bg-white/70 rounded-lg border-2 border-purple-950">

          <h4 className="text-4xl font-bold">Sign In</h4>
          <div>
            <form className="w-[300px] mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>

              <div className="mb-8">
                {/* USERNAME */}
                <label
                  htmlFor="name"
                  className="text-gray-500 text-2 mb-1 mr-0">

                </label>
                Username
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="h-9 bg-[#f1f1f1] w-full mt-2 border-2  rounded-lg pl-3"
                  {
                  ...register("username", { required: "Username is required" })
                  }
                  placeholder="Input Username..." />
                {errors.username && (<p className="text-red-500">{errors.username.message}</p>)}
              </div>


              <div className="mb-8">
                {/* PASSWORD */}
                <label
                  htmlFor="name"
                  className="text-gray-500 text-2 mb-1 mr-0">

                </label>
                Password
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="h-9 bg-[#f1f1f1] w-full mt-2 rounded-lg pl-3"
                  {
                  ...register("password", { required: "Password is required", minLength: 8 })
                  }
                  placeholder="Input Password..." />
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              </div>

              <div>
                {/* SUBMIT BUTTON */}
                <button className="flex justify-center">

                  <input
                    type="submit" value="SignIn" className="h-9 bg-[#7848f4] w-40 text-white rounded-lg" placeholder="Create Event">
                  </input>
                  {isSubmitting ? <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                  /> : "Login"}
                </button>
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