
import HomeCard from "../components/homeCard"
import dummyOne from "../../../assets/images/dummyOne.jpg"



const Welcome = () => {
  return (
    <div className="bg-[url('./assets/images/paintBg.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[900px] w-[1050px] bg-black/80 mt-20 rounded-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10">W E L C O M E</span>
              <div className="h-0.5 w-32 bg-orange-600"></div>
            </div>
            <div className="pt-3 pl-10 gap-x-16 flex flex-col">
              <span className="text-white text-2xl font-bold">HOME TO TOP PROGRAMMERS AROUND THE WORLD</span>
              <span className="font-bold text-1xl text-orange-600">E X P L O R E</span>
            </div>
            <div>
              <HomeCard profpic={dummyOne} className=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>

    </div>
  )
}

export default Welcome