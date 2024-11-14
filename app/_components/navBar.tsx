"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-solid px-4 py-4 shadow-md md:px-8">
      <div className="flex items-center gap-4 md:gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            DashBoard
          </Link>
          <Link
            href="/transactions"
            className={
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Transações
          </Link>
          <Link
            href="/reports"
            className={
              pathname === "/reports"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Relatórios
          </Link>
          <Link
            href="/subscription"
            className={
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Assinatura
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <button
          className="text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        <UserButton
          showName={false}
          appearance={{ elements: { rootBox: "h-8 w-8" } }}
        />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <UserButton
          showName={true}
          appearance={{
            elements: { rootBox: "flex items-center gap-2" },
          }}
        />
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 opacity-100 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background shadow-lg transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="flex h-full flex-col p-6">
              <button
                className="mb-4 self-end text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "font-bold text-primary"
                      : "text-muted-foreground"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  DashBoard
                </Link>
                <Link
                  href="/transactions"
                  className={
                    pathname === "/transactions"
                      ? "font-bold text-primary"
                      : "text-muted-foreground"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Transações
                </Link>
                <Link
                  href="/reports"
                  className={
                    pathname === "/reports"
                      ? "font-bold text-primary"
                      : "text-muted-foreground"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Relatórios
                </Link>
                <Link
                  href="/subscription"
                  className={
                    pathname === "/subscription"
                      ? "font-bold text-primary"
                      : "text-muted-foreground"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assinatura
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
