import { useRef } from "react";
import Menu from "./Menu";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={headerRef}
        className={"sticky top-0 w-full h-18 bg-orange bg-white shadow-md"}
      >
        <div className="flex justify-end px-28 py-8 font-bold text-[1.25rem]">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
