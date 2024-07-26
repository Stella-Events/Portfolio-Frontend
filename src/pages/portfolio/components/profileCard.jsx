

const ProfileCard = ({ profilePicture, sex, maritalStatus, address, dateOfBirth, bio, about, contact, resume, languages, githubLink, linkedInLink, twitterLink }) => {
    return (
        <div>

            <div className="gap-y-12">
                <div className="flex flex-row items-center gap-x-5 pt-10" >
                    <span className="font-bold text-1xl text-white pl-10 animate-pulse">P R O F I L E</span>
                    <div className="h-0.5 w-32 bg-secondary"></div>
                </div>
                <div className="pt-3 pl-10">
                    <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
                </div>
            </div>

            {/* PIC & TEXT */}
            <div className="flex flex-row pt-10 pl-10">
                {/* 1. profilePicture */}
                <div className="">
                    <img src={profilePicture} alt="profile picture of developer in view" className="size-[300px] object-contain" />
                </div>
                <div className="flex flex-col gap-y-10">
                    <div>
                        <span className="text-2xl text-[#8e44ad] pl-10 font-bold">JUNIOR FRONT-END WEB DEVELOPER</span>
                    </div>
                    {/* 2. BIO */}
                    <div className="text-white pl-10">
                        {bio}
                    </div>

                    {/* 3. LISTED ITEMS */}
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col gap-y-5">
                            <div className="text-white flex flex-row gap-5 font-bold">{dateOfBirth} <Cake className="text-[#8e44ad]" />Birthday :<div className="font-thin">14th July 2024</div></div>
                            <div className="text-white flex flex-row gap-5 font-bold">{sex} <ArrowRight className="text-[#8e44ad]" />Sex :<div className="font-thin">14th July 2024</div></div>
                            <div className="text-white flex flex-row gap-5 font-bold">{maritalStatus}<Handshake className="text-[#8e44ad]" />Marital Status :<div className="font-thin">14th July 2024</div></div>
                        </div>

                        <div className="flex flex-col gap-y-5">
                            <div className="text-white flex flex-row gap-5 font-bold">{contact} <SmartphoneNfc className="text-[#8e44ad]" />Contact :<div className="font-thin">14th July 2024</div></div>
                            <div className="text-white flex flex-row gap-5 font-bold">{contact} <Mail className="text-[#8e44ad]" />email :<div className="font-thin">14th July 2024</div></div>
                            <div className="text-white flex flex-row gap-5 font-bold">{address} <BookUser className="text-[#8e44ad]" />Address:<div className="font-thin">14th July 2024</div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ABOUT BOX AND LANGS */}
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
                    rounded-3xl flex justify-center items-center text-center pl-3 pr-3">{about}
                </div>

                {/* SOCIALS */}
                <div className="pl-10 pt-20 gap-10 flex items-center justify-center cursor-pointer">
                    <div className="h-16 w-[160px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">

                        <div>
                            <Link to ="https://github.com">
                            <img src={gitWhite} alt="icon-of-github-logo" className="h-14 w-14"/>
                            </Link>
                        </div>

                        <div>
                            <Link 
                            to = "https://github.com"
                            className="text-white mt-7 hover:text-[#8e44ad]">
                            {githubLink}
                            </Link>
                        </div>
                    </div>

                    <div className="h-16 w-[160px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                        <div>
                            <Link
                            to = "https://x.com/">
                            <img src={twitter} alt="icon-of-twitter-logo" className="h-10 w-10"/>
                            </Link>
                        </div>

                        <div>
                            <Link to = "https://x.com/"
                            className="text-white mt-7">{twitterLink}
                            </Link>
                        </div>
                    </div>

                    <div className="h-16 w-[160px] bg-white/20 rounded-3xl flex flex-row justify-center items-center gap-5">
                        <div>
                            <Link to = "https://www.linkedin.com/">
                            <img src={linkedIn} alt="icon-of-github-logo" className="h-14 w-14"/>
                            </Link>
                        </div>

                        <div>
                            <Link 
                            to="https://www.linkedin.com"
                            className="text-white mt-7">
                            {linkedInLink}
                            </Link>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default ProfileCard