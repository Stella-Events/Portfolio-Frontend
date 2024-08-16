
import VolCard from '../components/volCard'

const Volunteering = () => {
  return (
    <div className="bg-white w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[900px] w-[1050px] bg-black mr-20 ml-10 mt-20 rounded-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">V O L U N T E E R I N G</span>
              <div className="h-0.5 w-32 bg-[#8e44ad]"></div>
            </div>
            <div className="pt-3 pl-10 mb-5">
              <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="gap-y-3">
                  <VolCard
                    projectName="Health Outreach Program"
                    role="Community Health Initiative - Volunteer Coordinator"
                    description="Providing health check-ups and medical supplies to underprivileged communities."
                    skills="First Aid, Public Speaking"
                    responsibility="Organize volunteer schedules and manage community outreach."
                    location="Dodowa"
                    startDate="2020-01-15"
                    endDate="2020-12-15" />


                  <VolCard
                    projectName="Health Outreach Program"
                    role="Community Health Initiative - Volunteer Coordinator"
                    description="Providing health check-ups and medical supplies to underprivileged communities."
                    skills="First Aid, Public Speaking"
                    responsibility="Organize volunteer schedules and manage community outreach."
                    location="Dodowa"
                    startDate="2020-01-15"
                    endDate="2020-12-15" />
                </div>
              </div>
              
              <div className="flex flex-col">
              <VolCard
                    projectName="Health Outreach Program"
                    role="Community Health Initiative - Volunteer Coordinator"
                    description="Providing health check-ups and medical supplies to underprivileged communities."
                    skills="First Aid, Public Speaking"
                    responsibility="Organize volunteer schedules and manage community outreach."
                    location="Dodowa"
                    startDate="2020-01-15"
                    endDate="2020-12-15" />


                  <VolCard
                    projectName="Health Outreach Program"
                    role="Community Health Initiative - Volunteer Coordinator"
                    description="Providing health check-ups and medical supplies to underprivileged communities."
                    skills="First Aid, Public Speaking"
                    responsibility="Organize volunteer schedules and manage community outreach."
                    location="Dodowa"
                    startDate="2020-01-15"
                    endDate="2020-12-15" />

                </div>

            </div>
          </div>
        </div>
      </div>
      <div className="text-black font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )

}

export default Volunteering