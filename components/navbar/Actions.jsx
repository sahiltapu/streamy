import React from "react";
import { currentUser } from '@clerk/nextjs/server';
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

import { Clapperboard } from "lucide-react";
import { LogIn } from 'lucide-react';

const Actions = async () => {
    const user = await currentUser();
    return (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-1">
            {
                !user ? (
                    <SignInButton>
                        <Button
                            size="sm"
                            variant="custom"
                            className="gap-2">
                            {<LogIn />}
                            <span
                                className="hidden md:block"
                            >SignIn
                            </span>
                        </Button>
                    </SignInButton>
                ) : (
                    <div className="flex items-center gap-x-4">
                        <Link
                            href={`/u/${user.username}`}
                            className="flex flex-row justify-center items-center"
                        >
                            <Button
                                size="sm"
                                variant="custom"
                                className="gap-2"
                                aschild="true"
                            >
                                <Clapperboard />
                                <span className="hidden lg:block">
                                    Dashboard
                                </span>
                            </Button>
                        </Link>
                        <div className="flex justify-center p-1 bg-[#7469B6] rounded-full">
                            <UserButton
                                afterSignOutUrl="/"
                            />
                        </div>

                    </div>
                )
            }
        </div>
    );
};
export default Actions;
