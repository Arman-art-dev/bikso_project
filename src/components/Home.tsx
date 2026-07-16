import Featuresblock from "./Blocks"




function Home() {

    return (
        <>
            <div >

                <h1 className="text-center text-4xl font-bold mt-15">Welcome to Our Website</h1>
                <p className="text-center text-sm mt-3 ">Lorem ipsum dolor sit amet consectetur </p>

                

                <div className="flex row justify-center mt-10 mb-20 ">
                    <Featuresblock />
                </div>

            </div>
        </>
    )
}
export default Home