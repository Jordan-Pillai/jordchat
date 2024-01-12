"use client";

import {
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.data?.user) {
    authContent = (
      <>
        <NavbarContent justify="center">
          <NavbarItem>
            <Input placeholder="Search" />
          </NavbarItem>
        </NavbarContent>

        <Popover placement="left">
          <PopoverTrigger>
            <Avatar
              className="cursor-pointer"
              src={session.data?.user.image || ""}
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={actions.signOut}>
                <Button type="submit" color="primary">
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" variant="bordered" color="primary">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
