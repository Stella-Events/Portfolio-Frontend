import { Link, useNavigate } from "react-router-dom";
import { signup } from "../assets";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { apiCheckUsernameExists, apiSignup } from "../services/auth";
import { toast } from "react-toastify"
import { ColorRing } from "react-loader-spinner";
import Loader from "../components/loader";
import { debounce } from "lodash";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false)
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false)
  const [isUsernameLoading, setIsUsernameLoading] = useState(false)
  

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const checkUserName = async (username) => {
    setIsUsernameLoading(true);

    try {
      const res = await apiCheckUsernameExists(username);
      console.log(res.data);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      }
      else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }

    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      isUsernameLoading(false);
    }
  };

  const userNameWatch = watch("username");
  // console.log(userNameWatch);

  useEffect(() => {
        const debouncedSearch  = debounce (async() => {
          if (userNameWatch) {
           await checkUserName(userNameWatch)
          }
        }, 1000);

        debouncedSearch();


        return ()=>{
          debouncedSearch.cancel();
        };
  }, [userNameWatch]);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }
    try {
      const res = await apiSignup(payload);
      console.log(res.data);
      toast.success(res.data);

      navigate("/signin")

    } catch (error) {
      console.log(error);
      toast.error("An Error Occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex overflow-x-hidden ">
        <div className=" w-1/2 h-full fixed">
          <img className="w-full h-full" src={signup} alt="signup image" />
          <div className="absolute inset-0"></div>
      </div>
      <div className="flex flex-col justify-center items-center pt-5 w-1/2 pl-[1000px]">
        <div className="mb-5 pl-[500px] w-screen">
          <span className="text-3xl font-bold">Join Portfolio<span className="text-secondary">Hive</span></span>
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
                  {...register("firstName", { required: "First name is required",  minLength: {
                    value: 2,
                    message: "length must be more than 2 characters",
                  }, })}
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
                  {...register("lastName", { required: "Last name is required",  minLength: {
                    value: 2,
                    message: "length must be more than 2 characters",
                  },  })}
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
                  },
                  minLength: {
                    value: 2,
                    message: "length must be more than 2 characters",
                  },
                })}
              />
              {errors.username && (<p className="text-red-500">{errors.username.message}</p>
              )}

              <div>
                {
                  isUsernameLoading && <Loader/>
                }

                {
                  usernameAvailable && <p className="bg-green-500">Username is available!</p>
                }

                {
                  usernameNotAvailable && <p className="bg-red-500">Username is already taken!</p>
                }
              </div>

            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-medium py-2">Password</label>
              <input
                type="password"
                id="password"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password length must be more than 8 characters",
                  },
                })}                
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

            <button type="submit" className="w-1/2 py-3 bg-secondary text-white text-lg font-bold rounded flex items-center justify-center space-x-2 mb-2">
              <span>{isSubmitting ? <ColorRing
                      visible={true}
                      height="30"
                      width="30"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={['secondary']}
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
