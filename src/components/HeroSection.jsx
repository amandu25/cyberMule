function HeroSection() {
  return (
    <div className="flex mt-[50px] h-[470px]">
      <div className="flex flex-col gap-[30px] z-10 overflow-visible w-[45%]">
        <p className="text-[#34ABE2] font-bold text-[35.5px]">
          Complete <span className="text-[#00BF63]">Modern IT Security </span>
          in One Pane of Glass with Microsoft 365
        </p>
        <p className="text-[#E2EEFF] font-[21.8px] w-[420px]">
          We are a dynamic software development company dedicated to crafting
          innovative solutions that empower businesses and drive digital
          transformation.
        </p>
        <button className="bg-[#34ABE2] text-[#FFFFFF] font-semibold rounded-[10px] w-[168px] h-[54px] mt-[35px]">
          Know More
        </button>
      </div>
      <div>
        <img
          className="opacity-[34%] h-[470px] w-[760px] "
          src="/assets/HeroImage.png"
          alt="hero"
        />
      </div>
    </div>
  );
}

export default HeroSection;
