import React from "react";



interface Block{
    id:number;
    value:string;
    value2:string
}

function Featuresblock(){
    const data:Block[]=[
        {id:1,value:"Feature 1" ,value2:"Detail of feature 1"},
        {id:2,value:"Feature 2" ,value2:"Detail of feature 2"},
        {id:3,value:"Feature 3" ,value2:"Detail of feature 3"},
    ]
    return(
        <>
         {data.map((aa)=>(
            <div className="w-45 h-35 rounded-sm shadow-sm ml-3 bg-gray-300" key={aa.id}>

              <h1 className=" font-medium ml-3 text-2xl mt-6 ">{aa.value}</h1>  
              <p className="ml-3 text-sm ">{aa.value2}</p> 
                         
            </div>

         ))}
        
        </>
    )
}
export default Featuresblock

interface BblockProps{
    heading:string;
}


 export const Servicesblock:React.FC<BblockProps>=({heading="Heading"})=>{
    return(
        <>
        <div className="  text-center w-80 h-80 bg-amber-100">
            <p className="font-semibold pt-15">{heading}</p>
            <p className="text-sm m-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis esse eligendi molestiae unde repellendus minima, et corrupti error. Fugit nostrum nulla iste ea ad earum itaque nihil veritatis reiciendis commodi.</p>
        </div>
        </>
    )
 }