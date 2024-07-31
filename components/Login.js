'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

export default function Login() {
    const [dropDownMenu, setDropDownMenu] = useState(false)

    const { primaryWallet, handleLogOut } = useDynamicContext();

    const isLoggedIn = useIsLoggedIn();

    const copyWalletAddress = () => {
        navigator.clipboard.writeText(primaryWallet?.address);
    };

    const toggleDropDownMenu = () => {
        setDropDownMenu(prevState => !prevState);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div className="relative">
                  <a onClick={toggleDropDownMenu} className="cursor-pointer">
                    <p>{primaryWallet?.address?.slice(0, 4)}...{primaryWallet?.address?.slice(-4)}</p>
                  </a>
                  {dropDownMenu && (
                    <ul className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700">
                      <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-neutral-800">
                        <a onClick={copyWalletAddress} className="block w-full text-sm text-gray-800 dark:text-white">Copy Address</a>
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-neutral-800">
                        <a onClick={handleLogOut} className="block w-full text-sm text-gray-800 dark:text-white">Log Out</a>
                      </li>
                    </ul>
                  )}
                </div>
            ) : (
                <div className="flex items-center justify-center gap-3">
                  <Link href="/login">Create account</Link>
                  <Link href="/login">Log in</Link>
                </div>
            )}
        </div>
    )
}