import React from 'react'

const Education = () => {
  return (
    <div className="bg-[url('./assets/images/northlights.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[900px] w-[1050px] bg-black/80 mr-10 ml-10 mt-20 rounded-2xl">
          {/* FIRST TWO HEADER LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">E D U C A T I O N</span>
              <div className="h-0.5 w-32 bg-orange-600"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">MY EDUCATION TIMELINE</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="pt-10">
            <div className="flex flex-row justify-evenly">
              <span className="text-white font-bold text-3xl pl-10 italic text-start">Schools</span>
              <span className="text-white font-bold text-3xl pl-10 italic text-end">Camps & Conferences</span>
            </div>

            {/* DOT AND VERT LINE */}
            <div className="flex flex-col">
              {/* TOP-TWO */}
              <div className="flex flex-row justify-evenly">
                {/* TOP-LEFT */}
                {/* dot and line */}
                <div className="pr-20 pt-10">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <div className="h-5 w-5 rounded-full bg-orange-600"></div>
                      <div className="w-0.5 h-[320px] bg-white ml-2"></div>
                    </div>

                    {/* COURSE */}
                    <div className="flex flex-col text-center gap-y-2 italic">
                      <div className="text-white text-xl ml-5 pb-2">
                        Msc. Computer Science and Networking
                      </div>

                      {/* YEAR CARD */}
                      <div className="pl-5">
                        <div className="h-10 w-[120px] bg-purple-950/20 
                                   border-orange-500 border-2 
                                    flex flex-row justify-center items-center gap-5 anima">
                          <span className="text-white font-bold">2021 - 2023</span>
                        </div>

                        {/* SCHOOL */}
                        <div className="pt-3 pb-3">
                          <div className="text-white font-bold text-xl">
                            University of Ghana, Legon.
                          </div>
                        </div>
                      </div>

                      {/* DETAILS */}
                      <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div>

                      <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* TOP-RIGHT */}
                <div className="pr-10 pt-10">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <div className="h-5 w-5 rounded-full bg-orange-600"></div>
                      <div className="w-0.5 h-[320px] bg-white ml-2"></div>
                      <div></div>
                    </div>
                    <div className="flex flex-col text-center gap-y-5 italic">
                      <div className="text-white text-3xl ml-5 mb-5">
                        Ghana Technology University
                      </div>
                      <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div>
                      <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM-TWO */}
              <div className="flex flex-row justify-evenly">
                {/* BOTTOM-TWO */}

                {/* BOTTOM-LEFT */}
                {/* dot and line */}
                <div className="pr-20 pb-10">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <div className="h-5 w-5 rounded-full bg-orange-600"></div>
                      <div className="w-0.5 h-[260px] bg-white ml-2 pb-10"></div>
                    </div>

                    {/* COURSE */}
                    <div className="flex flex-col text-center gap-y-2 italic">
                      <div className="text-white text-xl text-start pl-5 pb-2">
                        Bsc. Computer Science
                      </div>

                      {/* YEAR CARD */}
                      <div className="pl-5">
                        <div className="h-10 w-[120px] bg-purple-950/20 
                                   border-orange-500 border-2 
                                    flex flex-row justify-center items-center gap-5 anima">
                          <span className="text-white font-bold">2021 - 2023</span>
                        </div>

                        {/* SCHOOL */}
                        <div className="pt-3 pb-3 pr-20">
                          <div className="text-white font-bold text-xl flex text-center justify-center items-center">
                            Kwame Nkrumah University <br/> of Science and Technology,<br/> Kumasi
                          </div>
                        </div>
                      </div>

                      {/* DETAILS */}
                      <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div>

                      {/* <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div> */}

                    </div>
                  </div>
                </div>

                {/* BOTTOM-RIGHT */}
                <div className="pr-10">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <div className="h-5 w-5 rounded-full bg-orange-600"></div>
                      <div className="w-0.5 h-[260px] bg-white ml-2 mb-4"></div>
                      <div></div>
                    </div>
                    <div className="flex flex-col text-center gap-y-5 italic">
                      <div className="text-white text-3xl ml-5 mb-5">
                        Ghana Technology University
                      </div>
                      <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div>
                      <div className="text-white">
                        <p> Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                          Blanditiis nulla,<br /> iste molestiae libero culpa consequuntur.
                        </p>
                      </div>

                    </div>
                  </div>
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

export default Education