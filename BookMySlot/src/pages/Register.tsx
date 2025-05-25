

const Register = () => {
  return (
<div className="w-full h-[720px] flex items-center justify-center bg-[#f3f3f3]">
  <div className="flex flex-row w-[50%] max-w-[1200px] h-[500px] rounded-[20px] bg-white border border-[#cfcfcf]">
    <div className="flex-1 flex items-center justify-center">
      <img
        src="images/loginPic.jpg"
        className="w-full h-[95%] max-w-[350px] rounded-[20px]"
        alt="Salon Welcome Image"
      />
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <h1 className="text-[25px] font-bold text-black text-center">Join with us!</h1>
      <form  className="flex flex-col">
        
        <label>Full Name</label>
          <input  type="text" name="name" required />

        <label>Contact</label>
          <input  type="tel" name="contact" required />

        <label>Email</label>
          <input  type="text"  name="email" required />

        <label>Password</label>
\          <input  type="password"  name="password" required />

        <button
          className="w-[80%] h-[50px] rounded-[30px] text-[20px] font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
          type="submit">
          Sign Up
        </button>
      </form>

      <div className="mx-6 text-sm mt-3">
        <span>Already have an account?</span>
        <a className="mx-2 text-blue-500 cursor-pointer">Sign In</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register