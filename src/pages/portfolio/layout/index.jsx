import { Outlet, useLoaderData } from "react-router-dom"
import Sidenav from "../components/sidenav"



const PortfolioLayout = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className="">
                <Sidenav username={data.username} />
                <div className="mt-20">
                    <Outlet context={data} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioLayout
