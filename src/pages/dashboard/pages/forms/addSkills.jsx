import { useForm } from "react-hook-form";
import { apiAddSkill, apiUpdateSkill } from "../../../../services/skills"; 
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Loader from "../../../../components/loader";
import { useNavigate, useParams } from "react-router-dom";

const EditSkill = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const res = await apiAddSkill(id);
        const { name, levelOfProficiency } = res.data.skill;
        setValue("name", name);
        setValue("proficiency", levelOfProficiency.charAt(0).toUpperCase() + levelOfProficiency.slice(1));
      } catch (error) {
        console.log(error);
      }
    };

    fetchSkill();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiUpdateSkill(id, {
        name: data.name,
        levelOfProficiency: data.proficiency.toLowerCase(),
      });

      console.log(res.data);
      toast.success(res.data.message);
      
      setTimeout(() => {
        navigate("/dashboard/skills")
      }, 1000);

    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-[100px] w-[500px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Skill</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">Skill Name</label>
          <input
            type="text"
            {...register("name", { required: "name is required" })}
            placeholder="Enter skill name"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="proficiency" className="text-lg font-medium">Level of Proficiency</label>
          <select
            {...register("proficiency", { required: "proficiency is required" })}
            id="proficiency"
            className="p-2 border border-gray-300 rounded"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
          >
            {isSubmitting ? <Loader /> : "Edit Skill"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSkill;
