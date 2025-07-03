import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const user = null;

  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/iq-notes.jpg"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          IQ <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          <Button asChild>
            <Link href="/logout">Log Out</Link>
          </Button>
        ) : (
          <>
            <Button asChild variant="outline">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="hidden sm:block">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <ThemeToggle />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
