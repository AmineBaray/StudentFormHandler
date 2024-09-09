import { data } from '../utils/data'
function Home() {
    return ( 
        <>
        <h1>
            Student list
        </h1>
        <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th>Full name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student)=>(
                <tr className="border-b">
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.email}</td>
                    <td>{student.class}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}
 
export default Home