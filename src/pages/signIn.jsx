import signIn from "../assets/images/signIn.png";
import facebook from "../assets/images/facebook.png";
import insta from "../assets/images/insta.png";
import twitter from "../assets/images/twitter.png";
import { useForm } from "react-hook-form";
import { apiLogin } from "../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";



const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        username: data.username,
        password: data.password
      });
      console.log("Response: ", res.data);
      localStorage.setItem("accessToken", res.data.accessToken);

      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("An Error Occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 bg-cover bg-center" >
        <img src={signIn} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 bg-[#f8f8fa]">
        <div className="flex flex-col items-center justify-center h-[550px] w-96 bg-white/70 rounded-lg border-2 border-purple-950">
          <h4 className="text-4xl font-bold">Sign In</h4>
          <div>
            <form className="w-[300px] mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                {/* USERNAME */}
                <label htmlFor="username" className="text-gray-500 text-2 mb-1 mr-0">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg pl-3"
                  {...register("username", { required: "Username is required" })}
                  placeholder="Input Username..."
                />
                {errors.username && (<p className="text-red-500">{errors.username.message}</p>)}
              </div>
              <div className="mb-8">
                {/* PASSWORD */}
                <label htmlFor="password" className="text-gray-500 text-2 mb-1 mr-0">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="h-9 bg-[#f1f1f1] w-full mt-2 rounded-lg pl-3"
                  {...register("password", { required: "Password is required", minLength: 8 })}
                  placeholder="Input Password..."
                />
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              </div>
              <div>
                {/* SUBMIT BUTTON */}
                <button className="flex justify-center items-center w-full h-9 bg-aColor text-white rounded-lg">
                  {isSubmitting ? (
                    <ColorRing
                      visible={true}
                      height="30"
                      width="30"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={['secondary']}
                    />
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </form>
          </div>
          <dir>
            <h2 className="text-2xl font-bold mt-4 mb-6"></h2>
            <span> Don't have an account?
              <Link to="/signup" className="underline px-2 text-black/60">
                signup
              </Link>
            </span>
          </dir>
          <div className="flex flex-row justify-between mt-4">
            <span className="size-[44px]"><img src={facebook} alt="blue-icon-of-facebook" /></span>
            <span className="size-[44px]"><img src={insta} alt="logo-of-instagram" /></span>
            <span className="size-[35px] mt-1"><img src={twitter} alt="new-logo-of-twitter" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
