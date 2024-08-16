
import { ArrowRight, BookUser, Cake, Handshake, Mail, SmartphoneNfc } from "lucide-react"
import gitWhite from "../../../assets/images/gitWhite.png"
import twitter from "../../../assets/images/twitter.png"
import linkedIn from "../../../assets/images/linkedIn.png"
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom"


const Profile = () => {
    const data = useOutletContext();

    return (
        <div className="bg-white/70 w-full min-h-screen bg-cover bg-no-repeat bg-fixed p-4 md:p-10">
            <div className="flex justify-center">

                <div className="w-full max-w-5xl bg-black rounded-2xl shadow-2xl p-10 md:p-10">


                    {/* FIRST TWO LINES */}
                    <div className="gap-y-12">
                        <div className="flex flex-row items-center gap-x-5 pt-5" >
                            <span className="font-bold text-1xl text-white pl-5 animate-pulse">P R O F I L E</span>
                            <div className="h-0.5 w-32 bg-[#8e44ad]"></div>
                        </div>
                        <div className="pt-3 pl-5">
                            <span className="text-white text-2xl md:text-4xl font-bold flex gap-x-2 md:gap-x-5">
                                <p>{data.firstName}</p>
                                <p >{data.lastName}</p>
                                <p >{data.otherNames}</p>
                            </span>
                        </div>
                    </div>

                    {/* P-PIC AND TEXT */}
                    <div className="flex flex-col md:flex-row pt-10 gap-y-6 md:gap-y-0 pl-5">
                        <div className="flex-shrink-0">
                            <img src={data.userProfile.profilePicture} alt="profile picture of developer in view" 
                            className="w-full md:w-[300px] h-auto object-contain rounded-lg" />
                        </div>

                        <div className="flex flex-col gap-y-6 pl-0 md:pl-10">
                            <div className="flex items-center gap-x-3">
                                <span className="text-lg md:text-2xl text-[#8e44ad] font-bold">JUNIOR FRONT-END WEB DEVELOPER</span>
                            </div>

                            <div className="text-white">
                                <p className="italic text-sm md:text-base">Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Facere optio voluptas autem, <br />
                                    asperiores labore nihil pariatur repellendus.
                                </p>
                            </div>

                            {/* LISTED ITEMS */}
                            <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0">
                                <div className="flex flex-col gap-y-3">
                                    <div className="text-white flex items-center gap-3 font-bold"> <Cake className="text-[#8e44ad]" />Birthday :<div className="font-thin">{data.userProfile.dateOfBirth}</div></div>
                                    <div className="text-white flex items-center gap-3 font-bold"> <ArrowRight className="text-[#8e44ad]" />Sex :<div className="font-thin">{data.userProfile.sex}</div></div>
                                    <div className="text-white flex items-center gap-3 font-bold"> <Handshake className="text-[#8e44ad]" />Marital Status :<div className="font-thin">{data.userProfile.maritalStatus}</div></div>
                                </div>

                                <div className="flex flex-col gap-y-3">
                                    <div className="text-white flex items-center gap-3 font-bold"> <SmartphoneNfc className="text-[#8e44ad]" />Contact :<div className="font-thin">{data.userProfile.contact}</div></div>
                                    <div className="text-white flex items-center gap-3 font-bold"> <Mail className="text-[#8e44ad]" />email :<div className="font-thin">{data.email}</div></div>
                                    <div className="text-white flex items-center gap-3 font-bold"> <BookUser className="text-[#8e44ad]" />Address:<div className="font-thin">{data.userProfile.address}</div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ABOUT BOX AND LANGS */}
                    <div className="flex flex-col md:flex-row pt-10 gap-y-6 md:gap-y-0 justify-between">
                        <div className="flex flex-col gap-y-3 w-full md:w-1/2">
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
                        <div className="text-white w-1/2 h-64 border-4 bg-[#8e44ad]/20 border-white
                    rounded-3xl flex justify-center items-center text-center pl-3 pr-3">
                            {data.userProfile.about}
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div className="pl-10 pt-20 gap-10 flex items-center justify-center cursor-pointer">
                        <Link 
                        
                        to="/github.com"

                        className="h-20 w-[256px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">

                            <div>
                                <img src={gitWhite} alt="icon-of-github-logo" className="h-14 w-14" />
                            </div>

                            <span>
                                <a className="text-white mt-7">GitHub</a>
                            </span>
                        </Link>

                        <Link 
                        
                        to = "x.com"
                        
                        className="h-20 w-[256px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                            <div>
                                <img src={twitter} alt="icon-of-twitter-logo" className="h-10 w-10" />
                            </div>
                            <span className="text-white mt-7">
                                X
                            </span>
                        </Link>

                        <Link 

                        to="linkedin.com"
                        
                        className="h-20 w-[256px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                            <div>
                                <img src={linkedIn} alt="icon-of-github-logo" className="h-14 w-14" />
                            </div>

                            <span>
                                <a className="text-white mt-7">LinkedIn</a>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="text-black font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
        </div>
    )
}

export default Profile