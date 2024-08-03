import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          ></Image>
        </SheetTrigger>
        <SheetContent className="bg-white flex flex-col gap-6">
          <Image
            src="assets/Images/logo.svg"
            alt="logo"
            width={128}
            height={138}
          />
          {/* <Separator className="border border-gray-50" /> */}
          <Separator className="border border-gray-50 " />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
