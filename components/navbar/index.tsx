import { HeaderLogo } from "./header-logo";

import { MenuItems } from "./menu-items";

export const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <HeaderLogo />

      <MenuItems />
    </div>
  );
};
