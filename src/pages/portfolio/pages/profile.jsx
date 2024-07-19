
import { ArrowRight, BookUser, Cake, Handshake, Mail, SmartphoneNfc } from "lucide-react"
import woman from "../../../assets/images/woman.jpg"
import paintBg from "../../../assets/images/paintBg.jpg"
import gitWhite from "../../../assets/images/gitWhite.png"
import twitter from "../../../assets/images/twitter.png"
import linkedIn from "../../../assets/images/linkedIn.png"

const Profile = () => {
    return (
        <div className="bg-[url('./assets/images/paintBg.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
            <div className="flex justify-center">
            <div className="h-[930px] w-[1050px] bg-black/70 mr-10 ml-10 mt-20 rounded-2xl">
                {/* FIRST TWO LINES */}
                <div className="gap-y-12">
                    <div className="flex flex-row items-center gap-x-5 pt-10" >
                        <span className="font-bold text-1xl text-white pl-10 animate-pulse">P R O F I L E</span>
                        <div className="h-0.5 w-32 bg-orange-600"></div>
                    </div>
                    <div className="pt-3 pl-10">
                        <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
                    </div>
                </div>

                {/* P-PIC AND TEXT */}
                <div className="flex flex-row pt-10 pl-10">
                    <div>
                        <img src={woman} alt="profile picture of developer in view" className="size-[300px] object-contain" />
                    </div>
                    <div className="flex flex-col gap-y-10">
                        <div>
                            <span className="text-2xl text-[#e67e22] pl-10 font-bold">JUNIOR FRONT-END WEB DEVELOPER</span>
                        </div>
                        <div className="text-white pl-10">
                            <p className="italic">Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Facere optio voluptas autem, <br />
                                asperiores labore nihil pariatur repellendus.
                            </p>
                        </div>

                        {/* LISTED ITEMS */}
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col gap-y-5">
                                <div className="text-white flex flex-row gap-5 font-bold"> <Cake className="text-orange-600" />Birthday :<div className="font-thin">14th July 2024</div></div>
                                <div className="text-white flex flex-row gap-5 font-bold"> <ArrowRight className="text-orange-600" />Sex :<div className="font-thin">14th July 2024</div></div>
                                <div className="text-white flex flex-row gap-5 font-bold"> <Handshake className="text-orange-600" />Marital Status :<div className="font-thin">14th July 2024</div></div>
                            </div>

                            <div className="flex flex-col gap-y-5">
                                <div className="text-white flex flex-row gap-5 font-bold"> <SmartphoneNfc className="text-orange-600" />Contact :<div className="font-thin">14th July 2024</div></div>
                                <div className="text-white flex flex-row gap-5 font-bold"> <Mail className="text-orange-600" />email :<div className="font-thin">14th July 2024</div></div>
                                <div className="text-white flex flex-row gap-5 font-bold"> <BookUser className="text-orange-600" />Address:<div className="font-thin">14th July 2024</div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT BOX AND LANGS */}
                {/* LANGS */}
                <div className="flex flex-row pt-10 justify-evenly">
                    <div className="flex flex-col gap-y-5 items-center justify-center">
                        <div className="flex flex-col">
                            <span className="text-white text-start">CSS 90%</span>
                            <div className="h-1 w-[388px] bg-white text-white relative">
                                <div className="h-1 w-[310px] bg-[#EA580C]">
                                    {/* <div className="h-10 w-10 bg-[#EA580C] rounded-full absolute 
                                    right-52 -bottom-3 text-white flex items-center justify-center">98%</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-start">HTML 90%</span>
                            <div className="h-1 w-[388px] bg-white text-white">
                                <div className="h-1 w-[310px] bg-[#EA580C]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-start">JavaScript 85%</span>
                            <div className="h-1 w-[388px] bg-white text-white">
                                <div className="h-1 w-[270px] bg-[#EA580C]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-start">REACT 90%</span>
                            <div className="h-1 w-[388px] bg-white text-white">
                                <div className="h-1 w-[310px] bg-[#EA580C]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-start">Mongo DB 90%</span>
                            <div className="h-1 w-[388px] bg-white text-white">
                                <div className="h-1 w-[310px] bg-[#EA580C]"></div>
                            </div>
                        </div>
                    </div>

                    {/* ABOUT BOX */}
                    <div className="text-white w-1/2 h-64 border-4 bg-purple-950/20 border-[#EA580C] 
                    rounded-3xl flex justify-center items-center text-center pl-3 pr-3">
                        about here Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque optio facilis molestiae, delectus sit earum repellendus,
                        cupiditate explicabo dolore qui quaerat architecto at minus doloremque porro
                        illum ea excepturi placeat!
                    </div>
                </div>

                {/* SOCIALS */}
                <div className="pl-10 pt-20 gap-10 flex items-center justify-center cursor-pointer">
                    <div className="h-20 w-[256px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">

                        <div>
                            <img src={gitWhite} alt="icon-of-github-logo" className="h-14 w-14"/>
                        </div>

                        <div>
                            <a className="text-white mt-7">GitHub</a>
                        </div>
                    </div>
                    <div className="h-20 w-[256px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                        <div>
                            <a href=""><img src={twitter} alt="icon-of-twitter-logo" className="h-10 w-10"/></a>
                        </div>

                        <div>
                            <a className="text-white mt-7">X</a>
                        </div>
                    </div>
                    <div className="h-20 w-[256px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                        <div>
                            <img src={linkedIn} alt="icon-of-github-logo" className="h-14 w-14"/>
                        </div>

                        <div>
                            <a className="text-white mt-7">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

           <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy StellaPortfolio</div>
        </div>
    )
}

export default Profile