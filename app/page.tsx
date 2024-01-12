import { Button } from "@nextui-org/react";
import Profile from "@/components/profile";

import * as actions from "@/actions";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        JORDCHAT
      </h1>
      <Profile />
      {session?.user ? (
        <>
          <form action={actions.signOut}>
            <Button color="primary" type="submit">
              Sign out
            </Button>
          </form>
          <h2>Welcome {session.user.name}</h2>
          <h3>{session.user.email}</h3>
        </>
      ) : (
        <form action={actions.signIn}>
          <Button color="primary" type="submit">
            Sign in
          </Button>
        </form>
      )}
    </main>
  );
}
