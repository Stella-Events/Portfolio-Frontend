import { Link } from "react-router-dom";
import K from "../../dashboard/components/constants";
import { useEffect, useState } from "react";
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetAllVolunteering } from "../../../services/volunteering";
import { apiGetAllProjects } from "../../../services/projects";
import Pagelaoder from "../../../components/pagelaoder";
import CountUp from "react-countup";


const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });

  const [isLoading, setIsLoading] = useState(false)


  const getData = async () => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAchievements, totalEducation, totalExperiences, totalVolunteering, totalProjects] = 
      await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetEducation(),
        apiGetExperiences(),
        apiGetAllVolunteering(),
        apiGetAllProjects(),
      ]);

      console.log("Total Skills: ", totalSkills.data.skills)

      const newData = {
        skills: totalSkills.data.skills.length ?? 0,
        projects: totalProjects.data.projects.length ?? 0,
        achievements: totalAchievements.data.achievements.length ?? 0,
        volunteering: totalVolunteering.data.volunteerings.length ?? 0,
        education: totalEducation.data.education.length ?? 0,
        experiences: totalExperiences.data.Experience.length ?? 0,
      };

      console.log("newData ",newData);

      setData(newData);
      console.log("Data ",data);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
<>
{
  isLoading ? <Pagelaoder/> :
  <div className="p-10 bg-gray-100 min-h-screen">
  <div className="mb-10 text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
    <p className="text-lg text-gray-600">Manage your projects, skills, and professional achievements all in one place.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {K.OVERVIEW.map(({ icon, text, link }, index) => (
      <div
        key={index}
        className={`h-52 p-8 flex flex-col justify-between rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-aColor to-tColor'}`}
      >
        <div className="flex justify-between items-center">
          <span className="text-white text-4xl">{icon}</span>
          <span className="text-white text-lg font-semibold">{text}</span>
          <CountUp 
         className="text-2xl font-semibold text-white"
         start={0}
         end={data[text.toLowerCase()]} 
         />
        </div>
          <Link
            to={link}
            className="text-white w-[200px] bg-opacity-50 bg-black py-1 px-3 rounded hover:bg-opacity-70 transition-all duration-300 text-center"
          >
            View More
          </Link>
        </div>
    ))}
  </div>
</div>
}
<div className="pl-[900px] mb-10">
<Link
            to="/portfolio/:username"
            className="border border-secondary text-black font-bold py-3 px-4 rounded-lg hover:bg-secondary hover:text-[#2C3E50] transition-all duration-300"
          >
View Portfolio        
          </Link>
</div>
</>
  );
};

export default Overview;
