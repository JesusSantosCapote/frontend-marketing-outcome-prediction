import { VerticalNavbar } from "../ui/VerticalNavbar";

export function Sidebar(){
    return (
        <div className="h-screen w-full  bg-gray-800 text-white">
            <h1 className="text-center">Marketing Outcome App</h1>
            <VerticalNavbar />
        </div>
    )
}