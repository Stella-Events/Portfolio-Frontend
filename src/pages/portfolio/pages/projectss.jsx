import ProjectCard from "../components/projectCard"
import ecom from "../../../assets/images/ecom.jpg"
import project4 from "../../../assets/images/project4.jpg"
import project1 from "../../../assets/images/project1.jpg"


const Projectss = () => {
  return (
    <div className="bg-[url('./assets/images/paintBg.jpg')] w-full h-[1500px] bg-cover bg-no-repeat bg-fixed cursor-pointer">
      <div className="flex justify-center">
        <div className="h-[1350px] w-[1050px] bg-black/70 mr-10 ml-20 mt-20 rounded-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10">P R O J E C T S</span>
              <div className="h-0.5 w-32 bg-orange-600"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
            </div>

            <div className="flex justify-center items-center mt-10">
              <ProjectCard
                image={ecom}
                projectName="MEET AND SELL"
                skillone="JavaScript"
                skilltwo="React"
                skillthree="Mongo DB"
                skillfour="Tailwind"
                description="An E-Commerce site for Buying and Selling General goods"
                contributors="Esther, Erica, Owarewaa, Tiernye"
                institution="Stella LLC"
                links="Github" />
            </div>
            <div className="flex justify-center mt-5">
              <div className="h-0.5 w-[850px] bg-white"></div>
            </div>

            <div className="flex justify-center items-center mt-5">
              <ProjectCard
                image={project4}
                projectName="SELL NOW"
                skillone="JavaScript"
                skilltwo="React"
                skillthree="Mongo DB"
                skillfour="Tailwind"
                description="An E-Commerce site for Buying and Selling General goods"
                contributors="Esther, Erica, Owarewaa, Tiernye"
                institution="Stella LLC"
                links="Github" />
            </div>
            <div className="flex justify-center mt-5">
              <div className="h-0.5 w-[850px] bg-white"></div>
            </div>
            
            <div className="flex justify-center items-center mt-5">
              <ProjectCard
                image={project1}
                projectName="MEET AND SELL"
                skillone="JavaScript"
                skilltwo="React"
                skillthree="Mongo DB"
                skillfour="Tailwind"
                description="An E-Commerce site for Buying and Selling General goods"
                contributors="Esther, Erica, Owarewaa, Tiernye"
                institution="Stella LLC"
                links="Github" />
            </div>
            <div className="flex justify-center mt-5">
              <div className="h-0.5 w-[850px] bg-white"></div>
            </div>

            <div className="flex justify-center items-center mt-5">
              <ProjectCard
                image={ecom}
                projectName="MEET AND SELL"
                skillone="JavaScript"
                skilltwo="React"
                skillthree="Mongo DB"
                skillfour="Tailwind"
                description="An E-Commerce site for Buying and Selling General goods"
                contributors="Esther, Erica, Owarewaa, Tiernye"
                institution="Stella LLC"
                links="Github" />
            </div>
            <div className="flex justify-center mt-5">
              <div className="h-0.5 w-[850px] bg-white"></div>
            </div>

          </div>
        </div>
      </div>
      <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy StellaPortfolio</div>
    </div>
  )
}

export default Projectss