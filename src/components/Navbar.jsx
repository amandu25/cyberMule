function Navbar() {
  return (
    <div className="flex justify-between h-[100px] items-center">
      <div className="w-[176px] h-[75px]">
        {" "}
        <img src="src/assets/Logo.png" alt="logo" />
      </div>

      <div>
        <ul className="flex gap-[25px] text-[#F0F3F9] font-bold mr-[220px]">
          <li>Problem</li>
          <li>Solution</li>
          <li>Support</li>
          <li>Use Cases</li>
          <li>How it Works</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
