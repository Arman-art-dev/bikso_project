function Footer() {
    return (
        <>

            <div className="relative w-full  justify-center h-60 bg-gray-800 mb-0  ">



                 <div className=" w-65 h-60 absolute ml-10  bg-gray-400 rounded-sm  text-center">
                        <h1 className="font-bold text-2xl mt-5 underline  ">BISO </h1>
                        <p className="text-sm  m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat saepe, voluptates incidunt accusantium eaque vel velit unde, dolore inventore blanditiis atque, mollitia qui corrupti ull.</p>
                    </div>

                
                        <div className="flex ml-90 h-50">
                            <div className="mt-5  ">
                                <h1 className="text-2xl font-medium text-amber-50">Get in Touch</h1>
                                <address className=" mt-3 text-white">
                                    <p><i className="fa-solid text-sm mr-2 text-blue-200 fa-location-dot"></i>310-R-Model Town ,karnal</p>
                                    <p>admin@rcodelabs.com</p>
                                    <p>+8090985199</p>
                                    <p className="flex">

                                        <a href="https://www.facebook.com"><img width="24" height="24" src="https://img.icons8.com/glyph-neue/64/FD7E14/facebook.png" alt="facebook" /></a>

                                        <a href="https://www.linkedin.com"><img width="24" height="24" src="https://img.icons8.com/glyph-neue/64/FD7E14/linkedin.png" alt="linkedin" /></a>

                                        <a href="https://www.instagram.com/"><img width="24" height="24" src="https://img.icons8.com/glyph-neue/64/FD7E14/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                                    </p>
                                </address>
                            </div>
                            <div className="text-white mt-5 ml-20">
                                <h1 className="text-2xl font-medium">Popular Links</h1>
                                <ol className="list-disc ml-4">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/About">About</a></li>
                                    <li><a href="/Services">Our service</a></li>
                                    <li><a href="">Contact us</a></li>
                                </ol>
                            </div>

                            

                        </div>



                <div className="bg-gray-950 h-10 flex items-center   m-0">
                    <p className="text-white ml-120">© 2026 Rcode Labs. All Rights Reserved. Designed by Rcode Labs</p>
                </div>

            </div>


        </>
    )
}
export default Footer



