
import { PlusCircleIcon } from "lucide-react";

const PagesLayout = ({headerText, buttonText, children}) => {
  return (
    <div className="p-10 flex flex-col gap-y-16">
        <div className="flex">
        <h1 className="text-3xl font-bold">{headerText}</h1>
        <button className="bg-primary text-bgColor py-2 ml-auto rounder-lg flex px-2">
            <PlusCircleIcon/>
            {buttonText} </button>
        </div>
        <div className="">{children}</div>
    </div>
  );
};

export default PagesLayout

