import {Link } from "react-router"

const Navbar = () => {
    
    return (
        <>
            <div className="flex justify-between w-full h-18 bg-amber-600">

                <p className=" font-bold  flex items-center ml-3 text-[35px]  underline">Biso</p>

                <nav className=" text-[16px]   flex gap-15  items-center mr-10 ">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Features">Features</Link>
                    <Link to="/Services">Services</Link>
                    <div className="">
                        <label htmlFor="Select"></label>
                    </div>
                </nav>



            </div>
           
        </>
    )
}
export default Navbar