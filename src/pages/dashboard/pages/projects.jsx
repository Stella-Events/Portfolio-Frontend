import PagesLayout from "../layout/pagesLayout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import K from "../../dashboard/components/constants";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout headerText="Projects" buttonText="Add New Project" onClick={() => navigate("/dashboard/projects/add-project")} >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {K.PROJECTS.map(({ projectName, description, technologies, githubLink, imageUrl }, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img src={imageUrl} alt={projectName} className="w-full h-40 object-cover" />
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2">{projectName}</h2>
              <p className="text-sm text-gray-600 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to={{ pathname: githubLink }}
                target="_blank"
                className="text-secondary hover:text-secondary-dark transition-all duration-300"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  )
}

export default Projects;
