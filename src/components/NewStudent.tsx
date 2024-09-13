import { ChangeEvent, Dispatch } from "react"
import { Student } from "../utils/data"

interface props{
  students: Student[]
  setStudents : Dispatch<React.SetStateAction<Student[]>>
}

function NewStudent({ setStudents, students }: props) {
  let formdata = {id: 1, name: "",age: 2,email: "", class: ""}

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    formdata.name = e.target.value;
  };
  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    formdata.age = parseInt(e.target.value);
  };
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    formdata.email = e.target.value;
  };
  const handleChangeClass = (e: ChangeEvent<HTMLInputElement>) => {
    formdata.class = e.target.value;
  };
  const handleSubmit  = (e: React.FormEvent) => {
    e.preventDefault();
    setStudents([...students, formdata])
  }
  return (
    <>
      <div className="ml-52 pt-20 w-2/3">
                <h2 className="text-4xl font-medium p-5">Add A New Student</h2>
                <form 
                className="pt-6 pb-8 mb-4">
                    <label className="block text-xl font-bold m-2">Full Name:</label>
                    <input
                    onChange={handleChangeName}
                    type="text"
                    required
                    className="shadow  border rounded w-full py-2 px-3 
                    focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-xl font-bold m-2">Age:</label>
                    <input
                    onChange={handleChangeAge}
                     type="number"
                     required
                     className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-xl font-bold m-2">Email:</label>
                    <input
                    onChange={handleChangeEmail}
                     type="email"
                     required
                     className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-xl font-bold m-2">Class:</label>
                    <input
                    onChange={handleChangeClass}
                     type="text"
                     required
                     className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />                    
                    <button 
                    onClick={handleSubmit}
                    className="m-4 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none
                     focus:ring-sky-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-sky-600
                      dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                      Add blog</button>
                </form>
            </div>
    </>
  )
}

export default NewStudent
