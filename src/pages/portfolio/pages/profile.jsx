
import { ArrowRight, BookUser, Cake, Handshake, Mail, SmartphoneNfc } from "lucide-react"
import dProfile from "../../../assets/images/dProfile.jpg"
// import finalBg from "../../../assets/images/finalBg.jpg"
import gitWhite from "../../../assets/images/gitWhite.png"
import twitter from "../../../assets/images/twitter.png"
import linkedIn from "../../../assets/images/linkedIn.png"
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="bg-black w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
            <div className="flex justify-center">
                <div className="h-[930px] w-[1050px] bg-[#34495e] mr-10 ml-10 mt-20 rounded-2xl">
                    {/* FIRST TWO LINES */}
                    <div className="gap-y-12">
                        <div className="flex flex-row items-center gap-x-5 pt-10" >
                            <span className="font-bold text-1xl text-white pl-10 animate-pulse">P R O F I L E</span>
                            <div className="h-0.5 w-32 bg-secondary"></div>
                        </div>
                        <div className="pt-3 pl-10">
                            <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
                        </div>
                    </div>

                    {/* P-PIC AND TEXT */}
                    <div className="flex flex-row pt-10 pl-10">
                        <div className="">
                            <img src={dProfile} alt="profile picture of developer in view" className="size-[300px] object-contain" />
                        </div>
                        <div className="flex flex-col gap-y-10">
                            <div>
                                <span className="text-2xl text-[#8e44ad] pl-10 font-bold">JUNIOR FRONT-END WEB DEVELOPER</span>
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
                                    <div className="text-white flex flex-row gap-5 font-bold"> <Cake className="text-[#8e44ad]" />Birthday :<div className="font-thin">14th July 2024</div></div>
                                    <div className="text-white flex flex-row gap-5 font-bold"> <ArrowRight className="text-[#8e44ad]" />Sex :<div className="font-thin">14th July 2024</div></div>
                                    <div className="text-white flex flex-row gap-5 font-bold"> <Handshake className="text-[#8e44ad]" />Marital Status :<div className="font-thin">14th July 2024</div></div>
                                </div>

                                <div className="flex flex-col gap-y-5">
                                    <div className="text-white flex flex-row gap-5 font-bold"> <SmartphoneNfc className="text-[#8e44ad]" />Contact :<div className="font-thin">14th July 2024</div></div>
                                    <div className="text-white flex flex-row gap-5 font-bold"> <Mail className="text-[#8e44ad]" />email :<div className="font-thin">14th July 2024</div></div>
                                    <div className="text-white flex flex-row gap-5 font-bold"> <BookUser className="text-[#8e44ad]" />Address:<div className="font-thin">14th July 2024</div></div>
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
                                    <div className="h-1 w-[310px] bg-secondary">
                                        {/* <div className="h-10 w-10 bg-[#EA580C] rounded-full absolute 
                                    right-52 -bottom-3 text-white flex items-center justify-center">98%</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-start">HTML 90%</span>
                                <div className="h-1 w-[388px] bg-white text-white">
                                    <div className="h-1 w-[310px] bg-secondary"></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-start">JavaScript 85%</span>
                                <div className="h-1 w-[388px] bg-white text-white">
                                    <div className="h-1 w-[270px] bg-secondary"></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-start">REACT 90%</span>
                                <div className="h-1 w-[388px] bg-white text-white">
                                    <div className="h-1 w-[310px] bg-secondary"></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-start">Mongo DB 90%</span>
                                <div className="h-1 w-[388px] bg-white text-white">
                                    <div className="h-1 w-[310px] bg-secondary"></div>
                                </div>
                            </div>
                        </div>

                        {/* ABOUT BOX */}
                        <div className="text-white w-1/2 h-64 border-4 bg-purple-950/20 border-[#8e44ad] 
                    rounded-3xl flex justify-center items-center text-center pl-3 pr-3">
                            about here Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque optio facilis molestiae, delectus sit earum repellendus,
                            cupiditate explicabo dolore qui quaerat architecto at minus doloremque porro
                            illum ea excepturi placeat!
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div className="pl-10 pt-20 gap-10 flex items-center justify-center cursor-pointer">
                        <div className="h-16 w-[160px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">

                            <div>
                                <Link to="https://github.com">
                                    <img src={gitWhite} alt="icon-of-github-logo" className="h-14 w-14" />
                                </Link>
                            </div>

                            <div>
                                <Link
                                    to="https://github.com"
                                    className="text-white mt-7 hover:text-[#8e44ad]">
                                    GitHub
                                </Link>
                            </div>
                        </div>

                        <div className="h-16 w-[160px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                            <div>
                                <Link
                                    to="https://x.com/">
                                    <img src={twitter} alt="icon-of-twitter-logo" className="h-10 w-10" />
                                </Link>
                            </div>

                            <div>
                                <Link to="https://x.com/"
                                    className="text-white mt-7">X
                                </Link>
                            </div>
                        </div>

                        <div className="h-16 w-[160px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                            <div>
                                <Link to="https://www.linkedin.com/">
                                    <img src={linkedIn} alt="icon-of-github-logo" className="h-14 w-14" />
                                </Link>
                            </div>

                            <div>
                                <Link
                                    to="https://www.linkedin.com"
                                    className="text-white mt-7">
                                    LinkedIn
                                </Link>
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