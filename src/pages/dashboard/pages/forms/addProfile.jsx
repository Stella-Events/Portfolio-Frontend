import { useState } from "react";

const AddProfile = () => {
  const [profile, setProfile] = useState({
    profilePicture: null,
    sex: "",
    maritalStatus: "",
    address: "",
    dateOfBirth: "",
    about: "",
    contact: {
      email: "",
      phoneNumber: "",
      linkedInProfile: ""
    },
    resume: "",
    languages: "",
    socialMediaLinks: {
      github: "",
      twitter: "",
      linkedin: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      socialMediaLinks: {
        ...profile.socialMediaLinks,
        [name]: value
      }
    });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      contact: {
        ...profile.contact,
        [name]: value
      }
    });
  };

  const handleImageChange = (e) => {
    setProfile({
      ...profile,
      profilePicture: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    // Add your form submission logic here
  };

  return (
    <div className="px-[70px] w-[680px]">
      <h2 className="text-2xl font-bold mb-6">Add New Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="profilePicture" className="text-lg font-medium">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleImageChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="about" className="text-lg font-medium">About</label>
          <textarea
            id="about"
            name="about"
            value={profile.about}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter about"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-lg font-medium">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="sex" className="text-lg font-medium">Sex</label>
          <input
            type="text"
            id="sex"
            name="sex"
            value={profile.sex}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter sex"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="maritalStatus" className="text-lg font-medium">Marital Status</label>
          <input
            type="text"
            id="maritalStatus"
            name="maritalStatus"
            value={profile.maritalStatus}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter marital status"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter address"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateOfBirth" className="text-lg font-medium">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={profile.dateOfBirth}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.contact.email}
            onChange={handleContactChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-lg font-medium">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={profile.contact.phoneNumber}
            onChange={handleContactChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="text-lg font-medium">LinkedIn Profile</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={profile.contact.linkedInProfile}
            onChange={handleContactChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter LinkedIn profile"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="resume" className="text-lg font-medium">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="languages" className="text-lg font-medium">Languages</label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={profile.languages}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter languages"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="github" className="text-lg font-medium">GitHub Link</label>
          <input
            type="url"
            id="github"
            name="github"
            value={profile.socialMediaLinks.github}
            onChange={handleSocialMediaChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter GitHub link"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="twitter" className="text-lg font-medium">Twitter Link</label>
          <input
            type="url"
            id="twitter"
            name="twitter"
            value={profile.socialMediaLinks.twitter}
            onChange={handleSocialMediaChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter Twitter link"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="text-lg font-medium">LinkedIn Link</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={profile.socialMediaLinks.linkedin}
            onChange={handleSocialMediaChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter LinkedIn link"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
        >
          Add Profile
        </button>
      </form>
    </div>
  );
};

export default AddProfile;
