const Menu = () => {
  const Menus = ["ABOUT ME", "SKILLS", "PROJECTS", "CAREER"];

  return (
    <>
      {Menus.map((menu) => (
        <p
          key={menu}
          className="mx-4 cursor-pointer"
        >
          {menu}
        </p>
      ))}
    </>
  );
};

export default Menu;
