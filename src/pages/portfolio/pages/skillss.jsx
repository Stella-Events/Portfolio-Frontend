import SkillsCard from "../components/skillsCard"


const Skillss = () => {
  return (
    <div className="bg-[url('./assets/images/finalBg.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[900px] w-[1050px] bg-black/80 mr-20 ml-10 mt-20 rounded-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">S  K  I  L  L  S</span>
              <div className="h-0.5 w-32 bg-orange-600"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
            </div>

            <div className="flex flex-col gap-y-5 mt-16">
              <div className="flex justify-center gap-x-5">

                <div className="flex justify-center">
                  <SkillsCard 
                  name="JavaScript"
                  proficiency="INTERMEDIATE"
                  className="text-white font-bold text-2xl" />
                </div>

                <div>
                  <SkillsCard
                   name="JavaScript"
                   proficiency="INTERMEDIATE"
                   className="text-white font-bold text-2xl" />
                </div>

                <div>
                  <SkillsCard
                   name="JavaScript"
                   proficiency="INTERMEDIATE"
                   className="text-white font-bold text-2xl" />
                </div>
              </div>


              <div className="flex justify-center gap-x-5">
                <div>
                  <SkillsCard
                   name="JavaScript"
                   proficiency="INTERMEDIATE"
                   className="text-white font-bold text-2xl" 
                 />
                </div>

                <div>
                  <SkillsCard
                   name="JavaScript"
                   proficiency="INTERMEDIATE"
                   className="text-white font-bold text-2xl" />
                </div>

                <div>
                  <SkillsCard 
                   name="JavaScript"
                   proficiency="INTERMEDIATE"
                   className="text-white font-bold text-2xl"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy StellaPortfolio</div>
    </div>
  )
}

export default Skillss