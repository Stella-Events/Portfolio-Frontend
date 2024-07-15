import { useState } from "react";

const AddProfile = () => {
  const [profile, setProfile] = useState({
    profilePicture: null,
    bio: "",
    username: "",
    socialMediaLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: ""
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
    <div className="p-10">
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
          <label htmlFor="bio" className="text-lg font-medium">Bio (About)</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter bio"
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
          <label htmlFor="socialMediaLinks" className="text-lg font-medium">Social Media Links</label>
          <div className="space-y-4">
            <input
              type="url"
              id="facebook"
              name="facebook"
              value={profile.socialMediaLinks.facebook}
              onChange={handleSocialMediaChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Facebook"
            />
            <input
              type="url"
              id="twitter"
              name="twitter"
              value={profile.socialMediaLinks.twitter}
              onChange={handleSocialMediaChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Twitter"
            />
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={profile.socialMediaLinks.linkedin}
              onChange={handleSocialMediaChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="LinkedIn"
            />
            <input
              type="url"
              id="instagram"
              name="instagram"
              value={profile.socialMediaLinks.instagram}
              onChange={handleSocialMediaChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Instagram"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
        >
          Add Profile
        </button>
      </form>
    </div>
  );
};

export default AddProfile;
