import React from 'react'
import EduCard from '../components/eduCard'
import { useOutletContext } from 'react-router-dom';

const Education = () => {

  const data = useOutletContext();
    console.log("🚀 ~ PortfolioProfile ~ data:", data); 

  return (
    <div className="bg-white w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[930px] w-[1050px] bg-black mr-10 ml-10 mt-20 rounded-2xl shadow-2xl">
          {/* FIRST TWO HEADER LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">E D U C A T I O N</span>
              <div className="h-0.5 w-32 bg-[#8e44ad]"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">MY EDUCATION TIMELINE</span>
            </div>
          </div>

          {/* EDUCATION */}

          <div className="flex flex-row">
            <div>
            {data.education?.map((education) => (
              <EduCard
              key={education.id}
                schoolName={education.schoolName}
                program={education.program}
                qualification={education.qualification}
                grade={education.grade}
                location={education.location}
                startDate={education.startDate}
                endDate={education.enDate}
              />
            ))
          }
          
            </div>
           
          </div>

        </div>
      </div>
      <div className="text-black font-bold mt-4 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )
}

export default Education