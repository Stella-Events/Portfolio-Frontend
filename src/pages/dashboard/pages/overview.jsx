import { Link } from "react-router-dom";
import K from "../../dashboard/components/constants";

const Overview = () => {

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {K.OVERVIEW.map(({ icon, text, total, link }, index) => (
          <div
            key={index}
            className={`h-52 p-8 flex flex-col justify-between rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-aColor to-tColor'}`}
          >
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl">{icon}</span>
              <span className="text-white text-lg font-semibold">{text}</span>
            </div>
            <div className="flex flex-col justify-end items-end mt-auto">
              <span className="text-white text-2xl font-semibold mb-4">{total}</span>
              <Link
                to={link}
                className="text-white w-[200px] bg-opacity-50 bg-black py-1 px-3 rounded hover:bg-opacity-70 transition-all duration-300"
              >
                View More 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
