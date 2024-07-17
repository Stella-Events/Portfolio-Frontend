import ProjectCard from "../components/projectCard"


const Projectss = () => {
  return (
    <div className="bg-[url('./assets/images/northlights.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[900px] w-[1050px] bg-black/80 mr-10 ml-20 mt-20 rounded-2xl">
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
            <ProjectCard/>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy StellaPortfolio</div>
    </div>
  )
}

export default Projectss