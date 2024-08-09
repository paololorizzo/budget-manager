import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import {createClient} from "../../../utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  active : string;
}

export async function Navbar({active}: NavbarProps) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  console.log("Active: ", active)
  return (
      <header className="sticky top-2 bottom-2 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
          <div className="flex flex-1 items-center justify-between space-x-4">
              <div className="flex space-x-2">
                  <Link href="/dashboard">
                      <Button
                          variant="ghost"
                          className={`${
                              active === "dashboard"
                                  ? "bg-[#F0F0FF] text-[#4A4AFF] shadow"
                                  : "bg-white text-gray-800"
                          } hover:bg-white transition-colors duration-300`}
                      >
                          Dashboard
                      </Button>
                  </Link>
                  <Link href="/history">
                      <Button
                          variant="ghost"
                          className={`${
                              active === "history"
                                  ? "bg-[#F0F0FF] text-[#4A4AFF] shadow"
                                  : "bg-white text-gray-800"
                          } hover:bg-[#F0F0FF] transition-colors duration-300`}
                      >
                          About
                      </Button>
                  </Link>
                  <Link href="/categories">
                      <Button
                          variant="ghost"
                          className={`${
                              active === "categories"
                                  ? "bg-[#F0F0FF] text-[#4A4AFF] shadow"
                                  : "bg-white text-gray-800"
                          } hover:bg-[#F0F0FF] transition-colors duration-300`}
                      >
                          Categories
                      </Button>
                  </Link>
              </div>
          <div className="flex flex-1 items-center space-x-2 justify-end">
            <ModeToggle/>
            <UserNav user={user?.data?.user}/>
          </div>
        </div>
      </header>
  );
}
