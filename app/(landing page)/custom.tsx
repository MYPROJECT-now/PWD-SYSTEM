'use client'

import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const PWdSignIn = function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const [pwdNo, setPwdNo] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLoaded) return

  // Start the sign-in process using the email and password provided
  try {
    const signInAttempt = await signIn.create({
      identifier: pwdNo,
      password,
    })

    if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.push('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <>
      <h1>Sign In </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pwdNo">Enter PWD No</label>
          <input
            id="pwdNo"
            type="text"
            name="pwdNo"
            value={pwdNo}
            onChange={(e) => setPwdNo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Enter password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LogIn</button>
      </form>
    </>
  )
}

