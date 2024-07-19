import AwardsCard from "../components/awardsCard"
import trophOne from "../../../assets/images/trophOne.jpg"
import trophTwo from "../../../assets/images/trophTwo.jpg"


const Achievement = () => {
  return (
    <div className="bg-[url('./assets/images/paintBg.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[950px] w-[1050px]  bg-black/70 mr-10 ml-10 mt-20 rounded-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-5" >
              <span className="font-bold text-1xl text-white pl-10">A C H I E V E M E N T S</span>
              <div className="h-0.5 w-32 bg-orange-600"></div>
            </div>

            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
            </div>
          </div>

          {/* AWARDS CARDS*/}
          <div className="flex flex-col">
            {/* TOP-ROW */}
            <div className="flex flex-row items-center justify-evenly gap-y-5 mt-5">
              <AwardsCard
                pic={trophOne} name="Promising Coder of Year"
                description="Awarded to the best coder at the annual coding marathon"
                date="20th June 2023"
                institution="Kofi Annan Institute of Technology for Change" />

              <AwardsCard
                pic={trophTwo} name="Promising Coder of Year"
                description="Awarded to the best coder at the annual coding marathon"
                date="20th June 2023"
                institution="Kofi Annan Institute of Technology for Change" />
            </div>

            {/* MIDDLE-ROW */}
            <div className="flex flex-row items-center justify-evenly gap-y-5 mt-10">
              <AwardsCard
                pic={trophOne} name="Promising Coder of Year"
                description="Awarded to the best coder at the annual coding marathon"
                date="20th June 2023"
                institution="Kofi Annan Institute of Technology for Change" />

              <AwardsCard
                pic={trophTwo} name="Promising Coder of Year"
                description="Awarded to the best coder at the annual coding marathon"
                date="20th June 2023"
                institution="Kofi Annan Institute of Technology for Change" />
            </div>

            {/* BOTTOM-ROW */}
            <div className="flex flex-row items-center justify-evenly gap-y-5 mt-10">
              <AwardsCard
                pic={trophOne} name="Promising Coder of Year"
                description="Awarded to the best coder at the annual coding marathon"
                date="20th June 2023"
                institution="Kofi Annan Institute of Technology for Change" />

              <AwardsCard
                pic={trophTwo} name="Promising Coder of Year"
                description="Awarded to the best coder at the annual coding marathon"
                date="20th June 2023"
                institution="Kofi Annan Institute of Technology for Change" />
            </div>


          </div>


        </div>
      </div>
      <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy StellaPortfolio</div>
    </div>
  )
}

export default Achievement