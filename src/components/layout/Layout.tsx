import { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
interface LayoutProps{
    children: ReactNode
}

export function Layout({children}: LayoutProps){
    return(
        <div className="grid grid-cols-2">
            <div className="border-r-2 h-screen w-1/3">
                <Sidebar />
            </div>

            <div className="h-screen w-8/12">
                {children}
            </div>
        </div>
    )
}