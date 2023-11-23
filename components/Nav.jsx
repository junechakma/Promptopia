'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import logo from '../public/assets/images/logo.svg'

function Nav() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

    return (

        <nav className="w-full flex items-center justify-between mt-16 border">
           
            <Link href="/" className="flex gap-2">
                <Image src={logo} width={30} height={30} className="object-contain" alt="Promptopia Logo" />
            </Link>
            
            <p className="logo_text">Promptopia</p>

            {/* Mobile Naviagtion */}
           
            <div className="sm:flex hidden">
                {
                    isUserLoggedIn ? (
                        <div className="flex gap-3 md:gap-5">
                            <Link href='/create-post' className="black_btn">
                                Create Post
                            </Link>
                        </div>

                ):(<></>)
                }
            </div>
        </nav>

    )
}

export default Nav