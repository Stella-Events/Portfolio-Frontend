import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { CirclePlus } from "lucide-react";
import dProfile from "../../../assets/images/dProfile.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    profilePicture: dProfile,
    sex: "Male",
    maritalStatus: "Single",
    address: "123 Example Street, City, Country",
    dateOfBirth: "1990-01-01",
    about: "Hello! I'm Christian Grey, a dedicated and passionate software developer with a keen interest in web technologies. With a strong background in both frontend and backend",
    contact: "+1234567890",
    resume: "https://example.com/resume.pdf",
    languages: "English, Spanish",
    githubLink: "https://github.com/example",
    linkedInLink: "https://linkedin.com/in/example",
    twitterLink: "https://twitter.com/example2",
  });

  return (
    <PagesLayout
      headerText="Profile"
      buttonText="Add New Profile"
      buttonIcon={<CirclePlus />}
      onClick={() => navigate("/dashboard/profile/add-profile")}
    >
      <div className="flex flex-col items-center space-y-8">
        <img
          src={profileData.profilePicture}
          alt="Profile"
          className="rounded-full h-60 w-60 mb-4"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">CHRISTIAN GREY</h2>
          <p className="text-gray-600 text-xl">Data Analyst | Frontend Developer</p>
        </div>
        <div className="flex flex-wrap justify-center w-full space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-white p-6 shadow rounded-lg w-full md:w-auto">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>
              <span className="font-bold">Contact:</span> {profileData.contact}
            </p>
            <p>
              <span className="font-bold">Languages:</span> {profileData.languages}
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
          </div>
          <div className="bg-white p-6 shadow rounded-lg w-full md:w-auto">
            <h3 className="text-xl font-bold mb-2">Social Links</h3>
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
        <div className="w-full bg-white p-6 shadow rounded-lg mt-8 ">
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="flex justify-between ">
          <div className="mr-[100px]">
              <p>
                <span className="font-bold">Sex:</span> {profileData.sex}
              </p>
              <p>
                <span className="font-bold">Marital Status:</span> {profileData.maritalStatus}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Date of Birth:</span> {profileData.dateOfBirth}
              </p>
              <p>
                <span className="font-bold">Address:</span> {profileData.address}
              </p>
            </div>
          </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">About</h2>
            <p>{profileData.about}</p>
          </div>
        </div>
    </PagesLayout>
  );
};

export default Profile;
