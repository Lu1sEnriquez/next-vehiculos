
async function getUser(id) {
    const res =await fetch(`http://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

async function userPage({params}) {
    
    const user = await getUser(params.id);
    console.log(user);
  return (
    <div className="bg-white w-1/2 h-1/3 flex 
    flex-wrap justify-center items-center px-20  text-black ">
        <img className=" w-40 m-auto rounded-full" src={user.avatar} alt="" />
        <div className="m-auto">
        <h1 className="text-3xl font-extrabold">{user.id}.- {user.first_name} {user.last_name}</h1>
        <p className="text-xl ">correo: {user.email} </p>
        
        </div>
    </div>
    
  )
}
export default userPage