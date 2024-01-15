import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <Navbar className="shadow mb-6" maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          JordChat
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
