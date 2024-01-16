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

import FormButton from "@/components/common/form-button";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.data?.user) {
    authContent = (
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
              <FormButton color="primary">Sign Out</FormButton>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <FormButton color="primary">Sign In</FormButton>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <FormButton variant="bordered" color="primary">
              Sign Up
            </FormButton>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
