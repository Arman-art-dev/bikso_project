
import { useEffect, useState } from "react"
import Input from "./Input"
import { supabase } from "./supabase"

type User = {
   id: number;
   fullname: string;
   username: string
   email: string;
   contact: string;
   password: string;
   gender: string;

}

function Features() {

   const [fullname, setfullname] = useState("")
   const [username, setuserame] = useState("")
   const [email, setemail] = useState("")
   const [contact, setcontact] = useState("")
   const [password, setpassword] = useState("")
   const [seletedoption, setselectedoption] = useState("")
   const [Cpassword, setCpassword] = useState("")
   const [isEditing,setisEditing]=useState(false)


   const [UserId, setUserId] = useState<number | null>(null)

   const [Userdata, setUserdata] = useState<User[]>([])

   useEffect(() => {
      callwork();
   }, [])


   async function callwork() {
      const { data, error } = await supabase
         .from("Posts")
         .select("*");

      if (error) {
         console.log(error);
         return;
      }

      setUserdata(data ?? []);
   }

   const register = async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log("Register clicked");
      setisEditing(false)

  

      const { data, error } = await supabase
         .from("Posts")
         .insert([{ fullname, username, email, contact, password, gender: seletedoption, },])
         .select();

      console.log("Data:", data);
      console.log("Error:", error);

      if (error) return;

      alert("Inserted");
      callwork();

      setfullname("");
      setuserame("");
      setemail("");
      setcontact("");
      setpassword("");
      setselectedoption("");
      setCpassword("")




   };

   const ondelete = async (id: number) => {

      const { error } = await supabase
         .from("Posts")
         .delete()
         .eq("id", id);

      if (error) {
         console.log(error);
         return;
      }

      alert("Deleted");

      callwork();
   };
   const onedit = async (aa: User) => {

      setisEditing(true)

      setUserId(aa.id)
      setfullname(aa.fullname || "")
      setuserame(aa.username || "")
      setemail(aa.email || "")
      setcontact(aa.contact || "")
      setpassword(aa.password || "")
      setselectedoption(aa.gender || "")

      callwork()

      
   }

   const onupdate = async (
      e: React.MouseEvent<HTMLButtonElement>
   ) => {

      setisEditing(false)

      e.preventDefault();

      const { error } = await supabase
         .from("Posts")
         .update({
            fullname,
            username,
            email,
            contact,
            password,
            gender: seletedoption,
         })
         .eq("id", UserId);

      if (error) {
         console.log(error);
         return;
      }



      setfullname("");
      setuserame("");
      setemail("");
      setcontact("");
      setpassword("");
      setselectedoption("");

      callwork();
   };

  




   return (
      <>
         <div className="bg-linear-to-r from-blue-400 to-purple-400 w-full  flex flex-col items-center justify-center">
            <div className="w-110 h-100 bg-white mt-15 rounded-sm">
               <h1 className=" text-[20px] text-center underline mt-3">Registration</h1>

               <form  onSubmit={register} className="m-4 flex flex-wrap gap-3 ">
                  <div>

                     <Input
                        onchange={(event) => setfullname(event.target.value)}
                        type="text"
                        value="name"
                        placeholder="Enter your name.."
                        value1={fullname}
                        maxlength={15}
                     />
                  </div>

                  <div>
                     <Input
                        onchange={(event) => setuserame(event.target.value)}
                        type="text"
                        value="Username"
                        placeholder="Enter your username.."
                        value1={username}
                        maxlength={15}

                     />
                  </div>

                  <div>
                     <Input
                        onchange={(event) => setemail(event.target.value)}
                        type="Email"
                        value="Email"
                        placeholder="Enter your Email.."
                        value1={email}
                     />
                  </div>

                  <div>
                     <Input
                        onchange={(event) => setcontact(event.target.value)}
                        type="tel"
                        pattern="[6-9][0-9]{9}"
                        value="Phone Number"
                        placeholder="Enter your number.."
                        value1={contact}
                        maxlength={10}
                     />
                  </div>

                  <div>
                     <Input
                        onchange={(event) => setpassword(event.target.value)}
                        type="password"
                        value="Password"
                        placeholder="Enter your Password.."
                        value1={password}
                     />
                  </div>


                  <div>
                     <Input
                        onchange={(event) => setCpassword(event.target.value)}
                        type="Password"
                        value="Confirm Password"
                        placeholder="Confirm your Password.."
                        value1={Cpassword}
                     />

                  </div>


                  { password !== Cpassword? (<p className="text-xs text-red-500 ">Password and confirm password must be same</p>)
                  : ""}
                
                  <div className="mt-3">
                     <p className="font-light mb-2">Gender</p>

                     <div className="flex gap-15">
                        <label className=" text-sm  " htmlFor="Male"><input onChange={(event) => setselectedoption(event.target.value)} checked={seletedoption == "Male"} className="mr-2" type="radio" id="Male" name="Gender" value="Male" />Male</label>
                        <label className=" text-sm " htmlFor="Female"><input onChange={(event) => setselectedoption(event.target.value)} checked={seletedoption == "Female"} className="mr-2" type="radio" id="Female" name="Gender" value="Female" />Female</label>
                        <label className=" text-sm " htmlFor="other"><input onChange={(event) => setselectedoption(event.target.value)} checked={seletedoption == "other"} className="mr-2" type="radio" id="other" name="Gender" value="other" />Prefer not to say</label>
                     </div>

                  </div>

                  <div className=" flex gap-3 mt-3 justify-center">
                     <button id="submit" type="submit" className={` ${isEditing===true? "w-50":"w-100"} h-7  mt-3 text-white font-semibold  rounded-[3px] text-sm flex items-center justify-center ${password !== Cpassword ?
                        "bg-gray-600 cursor-not-allowed":
                        "bg-linear-to-r from-blue-400 to-purple-400"
                     } `}
                     disabled={password !== Cpassword}>Register</button>

                     <button onClick={onupdate} className={` w-50 h-7  mt-3 text-white font-semibold bg-linear-to-r from-blue-400 to-purple-400 rounded-[3px] text-sm  items-center justify-center ${ isEditing===true? "flex":"hidden" }`}>on updates</button>
                  </div>

               </form>

            </div>

            <div className="w-full overflow-x-auto my-8">
               <table className="min-w-[80vw] mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">

                  {/* Table Header */}
                  <thead className="bg-linear-to-r from-blue-400 to-purple-400 text-white">
                     <tr>
                        <th className="px-4 py-3 text-left">ID</th>
                        <th className="px-4 py-3 text-left">Full Name</th>
                        <th className="px-4 py-3 text-left">Username</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3 text-left">Contact</th>
                        <th className="px-4 py-3 text-left">Password</th>
                        <th className="px-4 py-3 text-left">Gender</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                     </tr>
                  </thead>
                  {/* Table Body */}
                  <tbody>
                     {Userdata.map((aa) => (
                        <tr
                           key={aa.id}
                           className=" hover:bg-purple-50 transition"
                        >

                           <td className="px-2 py-2 text-sm">{aa.id}</td>
                           <td className="px-4 py-3 font-medium text-sm">{aa.fullname}</td>
                           <td className="px-4 py-3 text-sm">{aa.username}</td>
                           <td className="px-4 py-3 text-sm">{aa.email}</td>
                           <td className="px-4 py-3 text-sm">{aa.contact}</td>
                           <td className="px-4 py-3 text-sm">{aa.password}</td>
                           <td className="px-4 py-3 text-sm">{aa.gender}</td>

                           <td className="px-4 py-3">
                              <div className="flex gap-2 justify-center">
                                 <button
                                    onClick={() => onedit(aa)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg text-sm font-medium transition"
                                 >
                                    Edit
                                 </button>

                                 <button
                                    onClick={() => ondelete(aa.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm font-medium transition"
                                 >
                                    Delete
                                 </button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

         </div>
      </>
   )
}
export default Features