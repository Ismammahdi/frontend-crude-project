      
import { useState }  from 'react'
import './App.css';
import CreatUser from './Pages/CreatUser'

function App() {

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState(""); 
  const [password, setPassword] = useState("");

  const [fullNameError, setfullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumError, setPhoneNumError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleName=(e)=>{
    setfullName(e.target.value)
    setfullNameError("")
   
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }
  const handlePhone=(e)=>{
    setPhoneNum(e.target.value)
    setPhoneNumError('')
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(fullName==''){
      setfullNameError("Enter fullName")
    }
    else if(email==''){
      setEmailError('Enter Email')
    }
    else if(phoneNum==''){
      setPhoneNumError('Enter Phone Number')
    }
    else if(password==''){
      setPasswordError('Enter Passwors')
    }
    else{

      const userData={
        userName:fullName,
        email:email,
        phone:phoneNum,
        password:password,
      };

      fetch('http://localhost:8000/api/v1/create_user',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log('success',data)  
        setfullName('')
        setEmail('')
        setPhoneNum('')
        setPassword('')
      })

      .catch((error)=>{
        console.log(error.message)
      })
    }
  }



  return (
   <>
   <div className='flex justify-between items-center'>
    <div className='w-[45%]'>
    <CreatUser></CreatUser>
    </div>
    <div className='w-[45%]'>
    <h2 className='text-2xl font-semibold text-center py-5'>Post User to MongoDb</h2>

      <form  onSubmit={handleSubmit} className='bg-orange-200 px-10 py-5' >
        <input value={fullName} onChange={handleName} className='block my-2 px-1 py-2 rounded-xl outline-none  w-full border border-lime-400' type="text" placeholder='Enter Your Name' />
        <p className='text-red-700 font-semibold'>{fullNameError}</p>
        <input value={email} onChange={handleEmail} className='block my-2 px-1 py-2 rounded-xl outline-none  w-full border border-lime-400' type="email" placeholder='Enter Your Email' />
        <p className='text-red-700 font-semibold'>{emailError}</p>
        <input value={phoneNum} onChange={handlePhone} className='block my-2 px-1 py-2 rounded-xl outline-none w-full border border-lime-400' type="number" placeholder='Enter Your Phone' />
        <p className='text-red-700 font-semibold'>{phoneNumError}</p>
        <input value={password} onChange={handlePassword} className='block my-2 px-1 py-2 rounded-xl outline-none  w-full border border-lime-400' type="Password" placeholder='Enter Your Password' />
        <p className='text-red-700 font-semibold'>{passwordError}</p>
        <button className='w-[40%] block mx-auto  border py-2 px-3 bg-orange-500 rounded-lg outline-none text-lg text-white font-semibold' type='submit'>Submit</button>
        
      </form>
    </div>
   </div>

 </>
  )
}

export default App
