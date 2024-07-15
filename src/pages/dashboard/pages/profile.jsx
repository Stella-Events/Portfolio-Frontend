import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { CirclePlus } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    profilePicture: "https://via.placeholder.com/150", // Example URL for profile picture
    sex: "Male",
    maritalStatus: "Single",
    address: "123 Example Street, City, Country",
    dateOfBirth: "1990-01-01",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact: "+1234567890",
    resume: "https://example.com/resume.pdf", // Example URL for resume
    languages: "English, Spanish",
    githubLink: "https://github.com/example",
    linkedInLink: "https://linkedin.com/in/example",
    twitterLink: "https://twitter.com/example",
  });

  return (
    <PagesLayout
      headerText="Profile"
      buttonText="Add New Profile"
      buttonIcon={<CirclePlus/>}
      onClick={() => navigate("/dashboard/profile/add-profile")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src={profileData.profilePicture}
            alt="Profile"
            className="rounded-full h-40 w-40 mx-auto"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Personal Information</h2>
          <p>
            <span className="font-bold">Sex:</span> {profileData.sex}
          </p>
          <p>
            <span className="font-bold">Marital Status:</span>{" "}
            {profileData.maritalStatus}
          </p>
          <p>
            <span className="font-bold">Date of Birth:</span>{" "}
            {profileData.dateOfBirth}
          </p>
          <p>
            <span className="font-bold">Address:</span> {profileData.address}
          </p>
          <h2 className="text-xl font-bold mt-4 mb-2">Bio</h2>
          <p>{profileData.bio}</p>
          <h2 className="text-xl font-bold mt-4 mb-2">About</h2>
          <p>{profileData.about}</p>
          <h2 className="text-xl font-bold mt-4 mb-2">Contact Information</h2>
          <p>
            <span className="font-bold">Contact:</span> {profileData.contact}
          </p>
          <p>
            <span className="font-bold">Languages:</span>{" "}
            {profileData.languages}
          </p>
          <p>
            <span className="font-bold">Resume:</span>{" "}
            <a
              href={profileData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Resume
            </a>
          </p>
          <h2 className="text-xl font-bold mt-4 mb-2">Social Links</h2>
          <p>
            <span className="font-bold">GitHub:</span>{" "}
            <a
              href={profileData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Profile
            </a>
          </p>
          <p>
            <span className="font-bold">LinkedIn:</span>{" "}
            <a
              href={profileData.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            <span className="font-bold">Twitter:</span>{" "}
            <a
              href={profileData.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter Profile
            </a>
          </p>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Profile;
