

const HomeCard = ({ profpic, title, resumeprint, tile }) => {
    return (
        <div className="pl-10 pt-10">
            <div className="h-[650px] w-[960px] bg-purple-950  flex items-center justify-center">
                <div className="h-[450px] w-[860px] bg bg-black shadow-3xl flex flex-row">
                    <div>
                        <div>
                         <img src={profpic} alt="" className="h-96"/>   
                        </div>

                    </div>
                    <div>
                        <div>{title}</div>
                        <div>{resumeprint}</div>
                        <div>{tile}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard