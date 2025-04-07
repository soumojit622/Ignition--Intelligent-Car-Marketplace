import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ArrowLeft, CarFront, Heart, Layout, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="glass sticky top-0 z-50 border-b border-white/10 backdrop-blur-lg">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-gradient">Ignition</span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href="/">
              <Button className=" text-white blue-gradient flex items-center gap-2 cursor-pointer hover:brightness-90">
                <ArrowLeft size={18} />
                <span>Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link
                  href="/reservations"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
                >
                  <Button
                    variant="outline"
                    className="border-white text-white dark:text-white dark:border-white cursor-pointer hover:brightness-90"
                  >
                    <CarFront size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              )}
              <a href="/saved-cars">
                <Button className=" text-white blue-gradient flex items-center gap-2 cursor-pointer hover:brightness-90">
                  <Heart size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </a>
              {isAdmin && (
                <Link href="/admin">
                  <Button
                    variant="outline"
                    className="border-white text-white dark:text-white dark:border-white cursor-pointer"
                  >
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <SignInButton forceRedirectUrl="/">
                <Button className="blue-gradient text-white hover:brightness-90 flex items-center gap-2 cursor-pointer">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
