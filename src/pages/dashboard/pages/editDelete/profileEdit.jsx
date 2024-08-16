import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PagesLayout from "../../layout/pagesLayout";
import { apiGetProfile, apiUpdateProfile } from "../../../../services/profile"; 
import Loader from "../../../../components/loader"; 
import { toast } from "react-toastify";

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    profilePicture: "",
    sex: "",
    maritalStatus: "",
    address: "",
    dateOfBirth: "",
    about: "",
    contact: "",
    resume: "",
    languages: "",
    githubLink: "",
    linkedInLink: "",
    twitterLink: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const res = await apiGetProfile(id);
        setProfileData(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProfileData({ ...profileData, [name]: files[0] });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await apiUpdateProfile(id, profileData);
      toast.success("Profile updated successfully");
      navigate("/dashboard/profile");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PagesLayout headerText="Edit Profile">
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" name="profilePicture" onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sex</label>
            <input type="text" name="sex" value={profileData.sex} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
            <input type="text" name="maritalStatus" value={profileData.maritalStatus} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" name="address" value={profileData.address} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" name="dateOfBirth" value={profileData.dateOfBirth} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">About</label>
            <textarea name="about" value={profileData.about} onChange={handleChange} className="mt-1 block w-full"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input type="text" name="contact" value={profileData.contact} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Resume</label>
            <input type="file" name="resume" onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Languages</label>
            <input type="text" name="languages" value={profileData.languages} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">GitHub</label>
            <input type="url" name="githubLink" value={profileData.githubLink} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
            <input type="url" name="linkedInLink" value={profileData.linkedInLink} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Twitter</label>
            <input type="url" name="twitterLink" value={profileData.twitterLink} onChange={handleChange} className="mt-1 block w-full" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Update Profile</button>
        </form>
      )}
    </PagesLayout>
  );
};

export default EditProfile;