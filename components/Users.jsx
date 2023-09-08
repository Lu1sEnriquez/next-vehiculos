
import Image from "next/image";
import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link 
        href={`/users/${user.id}`}        
        key={user.id}
        
        >
          <li
            
            className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between "
          >
            <div>
              <h5 className="font-bold text-black">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className=" font-medium">emal: {user.email}</p>
              <button className="bg-blue-500 w-20 h-8 rounded-xl font-medium shadow-xl mt-3">
                Seguir
              </button>
            </div>
            <img
              className="rounded-full w-20 "
              src={user.avatar}
              alt="img"
            ></img>
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default Users;
