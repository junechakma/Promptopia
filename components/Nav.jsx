'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import logo from '../public/assets/images/logo.svg'
// import profile from '../public/assets/images/profile.svg'

function Nav() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggoleDropDown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setProviders()

    }, [])


    return (

        <nav className="w-full flex items-center justify-between mb-16 mt-2">

            <Link href="/" className="flex gap-2">
                <Image src={logo} width={30} height={30} className="object-contain" alt="Promptopia Logo" />
                <p className="logo_text">Promptopia</p>
            </Link>


            {/* Mobile Naviagtion */}

            <div className="sm:flex hidden">
                {
                    isUserLoggedIn ? (
                        <div className="flex gap-3 md:gap-5">
                            <Link href='/create-post' className="black_btn">
                                Create Post
                            </Link>
                            <button onClick={signOut} className="outline_btn">
                                Sign Out
                            </button>

                            <Link href="/profile">
                                <Image src={logo} width={37} height={37} className="rounded-full" alt="profile" />
                            </Link>
                        </div>

                    ) : (
                        <>
                            {
                                providers && Object.values(providers).map((provider) => (
                                    <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                                        Sign In
                                    </button>
                                ))
                            }

                        </>)
                }
            </div>

            {/* Mobile Device */}

            <div className="sm:hidden flex relative ">
                {
                    isUserLoggedIn ? (
                        <div className="flex">

                            <Image src={logo} width={37} height={37} className="rounded-full" onClick={() => { setToggoleDropDown((prev) => !prev) }} alt="profile" />
                            {
                                toggleDropDown && (
                                    <div className="dropdown">
                                        <Link href="/profile" className="dropdown_link" onClick={() => setToggoleDropDown(false)}>
                                            My Profile
                                        </Link>
                                        <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggoleDropDown(false)}>
                                            Create Prompt
                                        </Link>
                                        <button className="mt-5 w-full black_btn" type="button" onClick={() => { setToggoleDropDown(false); signOut() }}>
                                            Sign Out
                                        </button>
                                    </div>
                                )
                            }
                        </div>) : (
                        <>
                            {
                                providers && Object.values(providers).map((provider) => (
                                    <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                                        Sign In
                                    </button>
                                ))
                            }

                        </>)
                }

            </div>
        </nav>

    )
}

export default Nav