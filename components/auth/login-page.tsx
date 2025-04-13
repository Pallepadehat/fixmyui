"use client";

import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-12 transition-colors relative">
      <div className="absolute top-4 right-4 opacity-80 hover:opacity-100 transition-opacity">
        <ModeToggle />
      </div>

      <div className="w-full max-w-md">
        <Card className="w-full overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 dark:bg-zinc-900/70 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(0,0,0,0.2)]">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/10 to-secondary/20 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <CardHeader className="space-y-2 pt-8 text-center">
            <CardTitle className="text-2xl font-medium tracking-tight text-foreground">
              Welcome to FixMyUI
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Sign in to continue to your account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 p-8">
            <Button
              disabled={true}
              variant="outline"
              size="lg"
              className="w-full font-normal transition-all hover:bg-secondary/80 hover:translate-y-[-1px] active:translate-y-[1px] border-border dark:border-zinc-800"
              onClick={() => signIn("google", { redirectTo: "/dashboard" })}
            >
              <FaGoogle className="mr-2 h-4 w-4" />
              <span>Continue with Google</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full font-normal transition-all hover:bg-secondary/80 hover:translate-y-[-1px] active:translate-y-[1px] border-border dark:border-zinc-800"
              onClick={() => signIn("github", { redirectTo: "/dashboard" })}
            >
              <FaGithub className="mr-2 h-4 w-4" />
              <span>Continue with GitHub</span>
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-8 px-8">
            <div className="flex items-center w-full">
              <Separator className="flex-1 bg-border dark:bg-zinc-800" />
              <span className="px-2 text-xs text-muted-foreground font-medium">
                FixMyUI
              </span>
              <Separator className="flex-1 bg-border dark:bg-zinc-800" />
            </div>

            <p className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-2 hover:text-primary transition-colors font-medium"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-primary transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
