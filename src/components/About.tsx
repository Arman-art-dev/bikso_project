import walpaper2 from '../assets/images/pic-2.jpg'
import walpaper3 from '../assets/images/pic-3.webp'
import walpaper4 from '../assets/images/pic-4.jpg'
import main from '../assets/images/laptop-book-and-plant.jpg'

function About() {
    return (
        <>
            <div className='ml-20 mr-20'>
                <div className=" flex ">
                    <div >
                        <p className="font-extrabold text-2xl text-amber-600 mt-15">About US</p>
                        <p className="font-bold text-4xl  mt-2">We provide solutions for business</p>
                        <p className='mt-8 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt recusandae repellendus ex eligendi aliquid, dicta deserunt non, officiis aliquam culpa laborum dolorum omnis nihil aut voluptatibus expedita possimus nulla?</p>

                        <div className='flex gap-30 mt-10'>

                            <div className='font-medium  text-2xl'>

                                <div className='flex gap-3 '>
                                    <div className=''>
                                        <img width="28" height="28" src="https://img.icons8.com/glyph-neue/64/FD7E14/checkmark.png" alt="checkmark" />
                                    </div>
                                    <div>
                                        <p className='mb-7' >High quality work</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 '>
                                    <div className=''>
                                        <img width="28" height="28" src="https://img.icons8.com/glyph-neue/64/FD7E14/checkmark.png" alt="checkmark" />
                                    </div>
                                    <div>
                                        <p className='mb-7' >Proffesional Staff</p>
                                    </div>
                                </div>


                            </div>

                            <div className='font-medium text-2xl ' >
                                <div className='flex gap-3 '>
                                    <div className=''>
                                        <img width="28" height="28" src="https://img.icons8.com/glyph-neue/64/FD7E14/checkmark.png" alt="checkmark" />
                                    </div>
                                    <div>
                                        <p className='mb-7' >24/7 Service</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 '>
                                    <div className=''>
                                        <img width="28" height="28" src="https://img.icons8.com/glyph-neue/64/FD7E14/checkmark.png" alt="checkmark" />
                                    </div>
                                    <div>
                                        <p className='mb-7' >Fair prices</p>
                                    </div>
                                </div>



                            </div>


                        </div>

                        <div className='mt-20 text-2xl'>
                            <div className='flex gap-4' >
                                  <div>
                                <i className="fa-sharp fa-solid p-6 rounded-[3px] text-[20px] fa-phone bg-amber-600 text-white"></i>

                                  </div>
                                <div>
                                    <p className='mb-3'>Call to ask any question</p>
                                    <p className=' font-medium text-amber-600'>+9814598175</p>
                                </div>
                            </div>

                            <button className=" w-50 h-12 mt-3 text-white justify-center bg-amber-600 rounded-[3px] text-sm flex items-center">Request a Quote</button>
                        </div>

                    </div>
                    <div className='  ml-15 mt-15 '>
                        <img className='h-130 w-250 rounded-xs' src={main} alt="img" />
                    </div>





                </div>

                <div className=' text-center justify-center mt-10'>
                    <p className='font-extrabold text-2xl text-amber-600'>Team Members</p>
                    <p className=' text-4xl font-bold'>Professional stuffs Ready to </p>
                    <p className=' text-4xl font-bold'>Help your Buisness</p>

                    <div className='flex justify-center mt-10 gap-1 mb-20'>
                        <img src={walpaper2} alt="" width={350} />
                        <img src={walpaper3} alt="" width={350} />
                        <img src={walpaper4} alt="" width={350} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default About