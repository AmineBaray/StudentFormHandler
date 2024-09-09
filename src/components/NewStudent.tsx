
function NewStudent() {

  return (
    <>
      <div className="ml-52 pt-20 w-2/3">
                <h2 className="text-4xl font-medium p-5">Add a New Student</h2>
                <form 
                className="pt-6 pb-8 mb-4">
                    <label className="block text-xl font-bold m-2">Full name:</label>
                    <input
                     type="text"
                     required
                     className="shadow  border rounded w-full py-2 px-3 
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-xl font-bold m-2">Age:</label>
                    <input
                     type="text"
                     required
                     className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-xl font-bold m-2">Email:</label>
                    <input
                     type="text"
                     required
                     className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-xl font-bold m-2">Class:</label>
                    <input
                     type="text"
                     required
                     className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-xl font-bold m-2">Blog author:</label>
                    <input
                     type="text"
                     required
                     className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    
                    <button 
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
