import { code } from "../assets";

const Logo = () => {
  return (
    <div className="rounded-full bg-black p-1 absolute left-5 top-5 z-50 md:hidden">
      <img src={code} alt="code" width={30} height={30} />
    </div>
  );
};

export default Logo;
