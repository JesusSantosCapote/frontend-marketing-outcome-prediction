import { Link } from 'react-router-dom'
import { Activity, Info } from 'lucide-react'

export function VerticalNavbar(){
    return (
        <nav className="flex flex-col items-start p-4 h-full">
            <Link to={"/"} className='flex items-center mb-4 p-2  hover:bg-gray-700 rounded'>
                <Activity className='mr-2'/>
                <p>Predict</p>
            </Link>

            <Link to={"/about-us"} className='flex items-center p-2 mb-4  hover:bg-gray-700 rounded'>
                <Info className='mr-2' />
                <p>About Us</p>
            </Link>
        </nav>
    )
}