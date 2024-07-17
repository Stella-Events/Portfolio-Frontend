import hfive from "../../../assets/images/hfive.png"


const Skillss = () => {
  return (
    <div className="bg-[url('./assets/images/northlights.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
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
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-6 h-6 bg-orange-600 rounded-full -mb-4"><div className="w-6 h-6 bg-orange-600 rounded-full -mb-4 animate-ping"></div></div>
            <div className="w-1 h-12 bg-orange-600"></div>

            {/* GREEN */}
            <div className="w-10 h-36 bg-green-700 rounded-xl text-white">
              <div className="rotate-90 mt-14 font-thin">
                EXPERT
              </div>
              <div className="w-44 h-0.5 bg-green-700 ml-10 -mt-3">
                {name}
              </div>
              <div className="w-44 h-0.5 bg-green-700 ml-10 -mt-3">
              </div>
              <div className="">
                <img src={hfive} alt="" className="-left-48 absolute mt-10 ml-2 w-[100px] h-[100px]" />
              </div>

            </div>

            <div className="w-1 h-6 bg-orange-600"></div>

            {/* BLUE */}
            <div className="">
              <div className="w-10 h-36 bg-blue-900 rounded-xl text-white relative">
                <div className="w-44 h-0.5 bg-blue-900 ml-10 mt-16 -left-48 absolute">
                  {name}
                </div>
                <div className="w-44 h-0.5 bg-blue-900 ml-10 mt-14 -left-48 absolute">
                </div>
              </div>

              <div className="">
                <img src="" alt="" className="left-40 absolute mt-10 ml-2" />
              </div>

              <div className="flex justify-center items-center">
                <div className="w-1 h-6 bg-orange-600">
                </div>
              </div>
            </div>

            {/* YELLOW */}
            <div className="w-10 h-36 bg-yellow-500 rounded-xl text-black">
              <div className="rotate-90 mt-8 font-thin">
                INTERMEDIATE
              </div>
              <div className="w-44 h-0.5 bg-yellow-500 ml-10 mt-4">
                {name}
              </div>
              <div className="w-44 h-0.5 bg-yellow-500 ml-10 mt-2">

              </div>
            </div>

            <div className="w-1 h-6 bg-orange-600">
            </div>

            <div className="w-10 h-36 bg-red-600 rounded-xl text-white relative">
              <div className="rotate-90 mt-14 font-thin">
                BIGINNER
              </div>
              {/* BRANCH */}
              <div className="w-44 h-0.5 bg-red-600 -left-44 absolute">
                {name}
              </div>
              <div className="w-44 h-0.5 bg-red-600 -left-44 absolute mt-2">
              </div>
            </div>

            <div className="w-1 h-5 bg-orange-600"></div>
          </div>



        </div>
      </div>
      <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy StellaPortfolio</div>
    </div>
  )
}

export default Skillss