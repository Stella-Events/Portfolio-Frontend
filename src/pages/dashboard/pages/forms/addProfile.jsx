import { useForm } from "react-hook-form";
import { apiAddProfile } from "../../../../services/profile"; 
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../../components/loader";         
import { useNavigate } from "react-router-dom";

const AddProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Prepare FormData for file uploads and nested objects
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] instanceof File) {
        formData.append(key, data[key]);
      } else if (typeof data[key] === 'object') {
        Object.keys(data[key]).forEach(subKey => {
          formData.append(`${key}[${subKey}]`, data[key][subKey]);
        });
      } else {
        formData.append(key, data[key]);
      }
    });

    try {
      const res = await apiAddProfile(formData);
      toast.success(res.data.message); // Display success message
      setTimeout(() => {
        navigate("/dashboard/profile");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred"); // Display error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-[100px] w-[680px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="profilePicture" className="text-lg font-medium">Profile Picture</label>
          <input
            type="file"
            {...register("profilePicture")}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="about" className="text-lg font-medium">About</label>
          <textarea
            {...register("about", { required: "About is required" })}
            placeholder="Enter about"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.about && <p className="text-red-500">{errors.about.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-lg font-medium">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            placeholder="Enter username"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="sex" className="text-lg font-medium">Sex</label>
          <input
            type="text"
            {...register("sex", { required: "Sex is required" })}
            placeholder="Enter sex"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.sex && <p className="text-red-500">{errors.sex.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="maritalStatus" className="text-lg font-medium">Marital Status</label>
          <input
            type="text"
            {...register("maritalStatus", { required: "Marital status is required" })}
            placeholder="Enter marital status"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.maritalStatus && <p className="text-red-500">{errors.maritalStatus.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">Address</label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            placeholder="Enter address"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateOfBirth" className="text-lg font-medium">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", { required: "Date of birth is required" })}
            className="p-2 border border-gray-300 rounded"
          />
          {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input
            type="email"
            {...register("contact.email", { required: "Email is required" })}
            placeholder="Enter email"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.contact?.email && <p className="text-red-500">{errors.contact.email.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-lg font-medium">Phone Number</label>
          <input
            type="tel"
            {...register("contact.phoneNumber", { required: "Phone number is required" })}
            placeholder="Enter phone number"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.contact?.phoneNumber && <p className="text-red-500">{errors.contact.phoneNumber.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="linkedInProfile" className="text-lg font-medium">LinkedIn Profile</label>
          <input
            type="url"
            {...register("contact.linkedInProfile", { required: "LinkedIn profile is required" })}
            placeholder="Enter LinkedIn profile"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.contact?.linkedInProfile && <p className="text-red-500">{errors.contact.linkedInProfile.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="resume" className="text-lg font-medium">Resume</label>
          <input
            type="file"
            {...register("resume")}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="languages" className="text-lg font-medium">Languages</label>
          <input
            type="text"
            {...register("languages", { required: "Languages are required" })}
            placeholder="Enter languages"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.languages && <p className="text-red-500">{errors.languages.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="github" className="text-lg font-medium">GitHub Link</label>
          <input
            type="url"
            {...register("socialMediaLinks.github")}
            placeholder="Enter GitHub link"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="twitter" className="text-lg font-medium">Twitter Link</label>
          <input
            type="url"
            {...register("socialMediaLinks.twitter")}
            placeholder="Enter Twitter link"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="text-lg font-medium">LinkedIn Link</label>
          <input
            type="url"
            {...register("socialMediaLinks.linkedin")}
            placeholder="Enter LinkedIn link"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
          >
            {isSubmitting ? <Loader /> : "Add Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProfile;
