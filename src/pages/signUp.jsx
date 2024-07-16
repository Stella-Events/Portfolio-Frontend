import { Link, useNavigate } from "react-router-dom";
import { signupV } from "../assets";
import { useForm, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiCheckUsernameExists, apiSignup } from "../services/auth";
import { toast } from "react-toastify"
import { FallingLines } from "react-loader-spinner";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false)
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false)

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const checkUserName = async () => {
    try {
      const res = await apiCheckUsernameExists(username)
      console.log(res.data)
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true)
      } else {
        setUsernameAvailable(true)
      }
      if (user) {

      } else {

      }
    } catch (error) {
      console.log(error)

    }
  };



  const userNameWatch = watch("username");
  console.log(userNameWatch);

  useEffect(() => {
    if (userNameWatch) {
      checkUserName(userNameWatch)
    }
  }, [userNameWatch])




  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.username,
      email: data.email,
      password: data.password,
      confirmedPassword: data.confirmPassword,
    }
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }
    try {
      const res = await apiSignup(payload);
      console.log(res.data);
      toast.success(res.data)
      setTimeout(() => {
        navigate("/signin")
      }, 8000);

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="flex flex-row">
      <div className="relative w-1/2">
        <div className="relative">
          <img className="w-full" src={signupV} alt="signup image" />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        </div>
        <div className="absolute top-[310px] flex flex-col items-center w-full">
          <h2 className="text-white text-5xl font-bold py-11 px-[100px]">Welcome back</h2>
          <p className="text-white mb-11 px-[60px]">To keep connected with us provide us with your information</p>
          <button className="text-white w-[128px] h-[49px] bg-aColor text-[20px] rounded">
            <Link to="/signin" className="px-2 text-white">
              signin
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <div className="mb-5">
          <span className="text-3xl font-bold">Join Stella <span className="text-aColor">Portfolio</span></span>
          <h2 className="text-2xl font-bold mt-4 mb-6"></h2>
          <span> Already have an account?
            <Link to="/signin" className="underline px-2 text-black/60">
              signin
            </Link>
          </span>
        </div>
        <div>
          <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className="text-lg font-medium py-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="p-2 border border-gray-300 rounded"
                  placeholder="Enter your first name"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="lastName" className="text-lg font-medium py-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="p-2 border border-gray-300 rounded"
                  placeholder="Enter your last name"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="otherNames" className="text-lg font-medium py-2">Other Names</label>
              <input
                type="text"
                id="otherNames"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your other names"
                {...register("otherNames")}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="username" className="text-lg font-medium">Username
                <span className="text-black/50">(only letters, numbers and underscores)</span>
              </label>
              <input
                type="text"
                id="username"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message: "Username can only contain letters, numbers, and underscores"
                  }
                })}
              />
              {errors.username && (<p className="text-red-500">{errors.username.message}</p>
              )}
              
               {
                usernameAvailable  && <p className="bg-green-500">Username is avaialable!</p>
              }
              

              {
                usernameNotAvailable && <p className="bg-red-500">Username is already taken!</p>
              }
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-medium py-2">Password</label>
              <input
                type="password"
                id="password"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-lg font-medium py-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="p-2 border border-gray-300 rounded mb-2"
                placeholder="Confirm your password"
                {...register("confirmPassword", { required: "Repeat password is required" })}
              />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            <button type="submit" className="w-1/2 py-3 bg-aColor text-white text-lg font-bold rounded flex items-center justify-center space-x-2 mb-2">
              <span>{isSubmitting ? <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
              /> : "SignUp"}</span>
            </button>
          </form>
          <div className="flex items-center mt-5">
            <input
              type="checkbox"
              id="termsAndConditions"
              className="mr-2"
              {...register("termsAndConditions", { required: "You must accept the terms and conditions" })}
            />
            <label htmlFor="terms" className="font-light text-black">I accept the <Link className="font-medium text-primary-600 hover:underline " to="#">Terms and Conditions</Link> </label>            </div>
          {errors.termsAndConditions && <p className="text-red-500">{errors.termsAndConditions.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
