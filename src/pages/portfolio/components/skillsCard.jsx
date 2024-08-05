

const SkillsCard = ({ name, levelOfProficiency }) => {
    return (
        <div className="">
            <div className="h-60 w-60 bg-primary transition ease-in-out delay-150 flex items-center justify-center
            hover:-translate-y-1 hover:scale-110 hover:bg-[#8e44ad] duration-300 mt-5 rounded-2xl
            flex-col text-white">

                <div className="flex flex-col items-center place-content-center font-bold">
                    {name}
                </div>

                <div className="flex flex-col items-center place-content-center font-bold">
                    {levelOfProficiency}
                </div>
            </div>


        </div>

    )
}

export default SkillsCard