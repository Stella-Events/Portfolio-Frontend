import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGetSkillById, apiUpdateSkill } from "../../../../services/skills";
import { toast } from "react-toastify";
import Loader from "../../../../components/loader";

const SkillEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState({ name: "", levelOfProficiency: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSkill = async () => {
      setIsLoading(true);
      try {
        const res = await apiGetSkillById(id);
        setSkill(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch skill details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkill();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await apiUpdateSkill(id, skill);
      toast.success(res.data.message);
      navigate("/dashboard/skills");
    } catch (error) {
      console.log("Error updating skill:", error.response ? error.response.data : error.message);
      toast.error("Failed to update skill");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Skill</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={skill.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Level of Proficiency</label>
            <input
              type="text"
              name="levelOfProficiency"
              value={skill.levelOfProficiency}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default SkillEdit;
