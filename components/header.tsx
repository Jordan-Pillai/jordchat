import { Suspense } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
} from "@nextui-org/react";

import HeaderAuth from "./header-auth";
import SearchInput from "./search-input";

export default function Header() {
  return (
    <Navbar className="shadow mb-6" maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          JordChat
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
