import { PlusCircleIcon } from "lucide-react";

const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
  return (
    <div className="p-10 flex flex-col gap-y-16 min-h-screen">
      <div className="flex">
        <h1 className="text-3xl font-bold">{headerText}</h1>
      </div>
      <div className="flex-grow">{children}</div>
      <div className=""> 
      <button
          className="bg-secondary text-bgColor ml-[500px] w-1/4 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:bg-primary-dark hover:scale-105"
          onClick={onClick}
        >
          <PlusCircleIcon className="mr-2" />
          {buttonText}
        </button>
        </div>
    </div>
  );
};

export default PagesLayout;
