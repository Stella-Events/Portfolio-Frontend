import React from 'react'
import EduCard from '../components/eduCard'

const Education = () => {
  return (
    <div className="bg-[url('./assets/images/finalBg.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[930px] w-[1050px] bg-black/80 mr-10 ml-10 mt-20 rounded-2xl">
          {/* FIRST TWO HEADER LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">E D U C A T I O N</span>
              <div className="h-0.5 w-32 bg-secondary"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">MY EDUCATION TIMELINE</span>
            </div>
          </div>

          {/* EDUCATION */}

          <div className="flex flex-row">
            <div>
              <EduCard
                schoolName="University of Ghana"
                program="Program: Computer Science"
                qualification="Qualification: Bachelor's Degree"
                grade="Grade: A"
                location="Location: Accra, Ghana"
                startDate="Start Date: 09/01/2014"
                endDate="End Date: 06/01/2018"
              />
              <EduCard
                schoolName="University of Ghana"
                program="Program: Computer Science"
                qualification="Qualification: Bachelor's Degree"
                grade="Grade: A"
                location="Location: Accra, Ghana"
                startDate="Start Date: 09/01/2014"
                endDate="End Date: 06/01/2018"
              />
            </div>
            <div>
              <EduCard
                schoolName="University of Ghana"
                program="Program: Computer Science"
                qualification="Qualification: Bachelor's Degree"
                grade="Grade: A"
                location="Location: Accra, Ghana"
                startDate="Start Date: 09/01/2014"
                endDate="End Date: 06/01/2018"
              />
              <EduCard
                schoolName="University of Ghana"
                program="Program: Computer Science"
                qualification="Qualification: Bachelor's Degree"
                grade="Grade: A"
                location="Location: Accra, Ghana"
                startDate="Start Date: 09/01/2014"
                endDate="End Date: 06/01/2018"
              />
            </div>
          </div>

        </div>
      </div>
      <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy StellaPortfolio</div>
    </div>
  )
}

export default Education