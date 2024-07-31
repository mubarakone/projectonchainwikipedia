'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import { useEmbeddedWallet, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useConnectWithOtp, useEmbeddedWallet, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

const EmailSignup = () => {
  const DYNAMIC_ENVIRONMENT_ID = "6e7fa39b-7f3f-4264-9b41-887447305902";

  const [waitingForOtp, setWaitingForOtp] = useState(false);
  const [waitingForAuth, setWaitingForAuth] = useState(false);
  const [email, setEmail] = useState('');
  // const [verifying, setVerifying] = useState(false);
  const [OTP, setOTP] = useState('');
  // const [UUID, setUUID] = useState('');
  // const [JWT, setJWT] = useState('');
  // const [createSession, setCreatedSession] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [showSecondaryOTP, setShowSecondaryOTP] = useState(false); // State to handle secondary OTP visibility
  const router = useRouter();

  const { createEmbeddedWallet } = useEmbeddedWallet();
  const { connectWithEmail, verifyOneTimePassword } = useConnectWithOtp();

  // const sendEmailVerification = async () => {
  //   setVerifying(true);

  //   const options = {
  //     method: 'POST',
  //     headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  //     body: '{"identifier":"me@myemail.com","type":"email", "chain":"ETH", ,"socialProvider":"emailOnly"}'
  //   };
    
  //   fetch(`https://app.dynamicauth.com/api/v0/environments/${DYNAMIC_ENVIRONMENT_ID}/embeddedWallets`, options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // };

  // const verify = async () => {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       verificationToken: OTP,
  //       verificationUUID: UUID,
  //     }),
  //   };

  //   fetch(
  //     `https://app.dynamicauth.com/api/v0/sdk/${DYNAMIC_ENVIRONMENT_ID}/emailVerifications/signIn`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setVerifying(false);
  //       setJWT(response.jwt);
  //       setShowSecondaryOTP(true); // Show secondary OTP after JWT is obtained
  //       console.log("JWT: ", JWT)
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setVerifying(false);
  //     });
  // };

  // const {
  //   createEmbeddedWallet,
  //   createOrRestoreSession,
  //   isSessionActive,
  //   sendOneTimeCode,
  //   userHasEmbeddedWallet,
  // } = useEmbeddedWallet();

  // const oneTimeCodeSent = useRef(false);

  // useEffect(() => { 
  //   console.log("JWT: ", JWT)
  //   console.log("isSessionActive: ", isSessionActive)
  //   console.log("userHasEmbeddedWallet: ", userHasEmbeddedWallet)
  //   if (isSessionActive) {
  //     console.log("isSessionActive: ", isSessionActive)
  //   }if (userHasEmbeddedWallet) {
  //     console.log("userHasEmbeddedWallet: ", userHasEmbeddedWallet)
  //   }
  // }, [JWT, isSessionActive, userHasEmbeddedWallet])

  // useEffect(() => {
  //   const startSession = () => {
  //     try {
  //       if (!JWT) return
  //         if (isSessionActive) return;
  //         createOrRestoreSession();
  //     } catch (err) {
  //       return
  //     }
  //   };

  //   startSession();
  // }, [isSessionActive, router, JWT]);

  // const onSendOneTimeCodeHandler = async () => {
  //   if (!userHasEmbeddedWallet()) await createEmbeddedWallet();

  //   if (!isSessionActive) {
  //     try {
  //       await sendOneTimeCode();
  //       oneTimeCodeSent.current = true;
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  // };

  // const onCreateSessionHandler = async (event) => {
  //   try {
  //     event.stopPropagation();
  //     event.preventDefault();

  //     if (!userHasEmbeddedWallet()) return;

  //     const otc = event.currentTarget.otc.value;

  //     await createOrRestoreSession({ oneTimeCode: otc })
  //       .then((result) =>
  //           console.log("Session created: ", result)
  //       )
  //       .catch((error) =>
  //         console.log("Error creating session: ", error.message)
  //       );
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn])

  const onSubmitEmailHandler = async () => {

    setWaitingForOtp(true);

    await connectWithEmail(email);
  };

  const onSubmitOtpHandler = async () => {

    setWaitingForAuth(true);
    setWaitingForOtp(false);

    await verifyOneTimePassword(OTP);
    await createEmbeddedWallet();
    router.push('/')
  };

  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Don't have an account yet?
            <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signup.html">
              Sign up here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
              <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
              <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
              <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
              <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
            </svg>
            Sign in with Google
          </button>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-y-4">
              {/* Form Group */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    aria-describedby="email-error"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                  </div>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              {/* End Form Group */}

              {waitingForOtp && (
                <div>
                  <label htmlFor="otp" className="block text-sm mb-2 dark:text-white">OTP</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      value={OTP}
                      onChange={(e) => setOTP(e.target.value)}
                      placeholder="Enter your OTP"
                    />
                  </div>
                </div>
              )}

              {/* Checkbox */}
              <div className="flex items-center">
                <div className="flex">
                  <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                </div>
                <div className="ms-3">
                  <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                </div>
              </div>
              {/* End Checkbox */}
                {!waitingForAuth ? (
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={waitingForOtp ? onSubmitOtpHandler : onSubmitEmailHandler}
                  >
                    {waitingForOtp ? 'Verify' : 'Submit'}
                  </button>
                  ) : (
                    <button
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white-600 rounded-full dark:text-white-500" role="status" aria-label="loading">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </button>
                  )
                }
            </div>
          </form>
          {/* End Form */}
        </div>

        {/* {showSecondaryOTP && (
          <div className="mt-5">
            {!isSessionActive && (
              <div>
                {!oneTimeCodeSent.current && (
                  <button
                    onClick={onSendOneTimeCodeHandler}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Next
                  </button>
                )}
                {oneTimeCodeSent.current && (
                  <form onSubmit={onCreateSessionHandler} className="create-session-method">
                    <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                      Enter one-time code sent to email to create a session
                    </p>
                    <input
                      required
                      name="otc"
                      type="text"
                      placeholder="One-time code"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                    <br />
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Create session
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default function Login() {
  return (
    <div className="box-border h-full w-[90vw] mx-auto text-[1vw] font-sans">
      <Header />
      <div className="box-border flex">
        <EmailSignup />
      </div>
      <Footer />
    </div>
  );
}
