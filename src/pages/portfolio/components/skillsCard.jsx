

const SkillsCard = ({ name, proficiency }) => {
    return (
        <div>
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
                   
                </div>

                <div className="w-1 h-6 bg-orange-600"></div>

                    {/* BLUE */}
                <div className="w-10 h-36 bg-blue-900 rounded-xl text-white relative">
                    <div className="w-44 h-0.5 bg-blue-900 ml-10 mt-16 -left-48 absolute">
                    {name}
                    </div>
                    <div className="w-44 h-0.5 bg-blue-900 ml-10 mt-14 -left-48 absolute">
                    </div>
                    <div>
                        <img src={} alt="" />
                    </div>
                </div>

                <div className="w-1 h-6 bg-orange-600">
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

            <div>{name}</div>
            <div>{proficiency}</div>
        </div>
    )
}

export default SkillsCard