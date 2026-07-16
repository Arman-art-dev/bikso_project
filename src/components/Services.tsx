import { Servicesblock } from "./Blocks"



function Services(){
    return(
        <>
        <div>
           <div className="mt-20">
             <h1 className="text-center font-extrabold text-2xl text-amber-600">Our SERVICES</h1>
             <p className="text-4xl font-bold  text-center mt-4">Custom IT Solutions for Your</p>
             <p className="text-4xl font-bold text-center">Succesfull Buisness</p>
           </div>



            <div className="flex flex-wrap gap-20 m-10 justify-center">
               <Servicesblock heading="Web Designing"/>
               <Servicesblock heading="Web Devlopment"/>
               <Servicesblock heading="Domain & Web Hosting"/>
               <Servicesblock heading="Apps Development"/>
               <Servicesblock heading="AI & n8n Automation Studio"/>
               <Servicesblock heading="AI & n8n Automation Studio"/>
               <Servicesblock heading="Graphic Designing"/>
               <Servicesblock heading="Video Editing"/>
               <Servicesblock heading="Social Media Marketing"/>

            </div>




            <div className="mt-20">
             <h1 className="text-center font-extrabold text-2xl text-amber-600">TESTIMONIAL</h1>
             <p className="text-4xl font-bold  text-center mt-4">What our Clients Say About</p>
             <p className="text-4xl font-bold text-center">Our Digital Services</p>
           </div>

        </div>
        </>
    )
}
export default Services