import { Student } from '../utils/data';

interface props {
    students: Student[]
  }
function Home(props: props) {
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
                {props.students.map((item)=>(
                <tr key={item.id}
                className="border-b">
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.class}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}
 
export default Home