import { LoaderIcon } from "lucide-react";

export const Loader = () => {
    return(
        <div className="flex justify-center items-center h-screen bg-accent/70">
            <LoaderIcon size={30} className="animate-spin" />
        </div>
    )
}