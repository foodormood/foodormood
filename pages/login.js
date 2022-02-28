// Next JS related
import Head from 'next/head';
import { useRouter } from 'next/router';

// Firebase related
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, firebase } from '../app/firebaseApp';
import { uiConfig } from '../config/firebaseAuthUI.config';

// Components
import Logo from '../components/elements/Logo';


export default function Login() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    // if (loading) return <Loading />
    // else if (error) return <Error msg={error} />

    if (user) {
        // user is already logged in, redirect to home page
        router.push('/');
    }

    const authConfig = uiConfig(firebase);

    return (
        <>
            <Head>
                <title>LogIn</title>
            </Head>
            <main className="bg-gray-50">
                <div className="flex mt-10 mb-5">
                    <h1 className="mx-auto font-semibold text-2xl">Make the most of your professional life</h1>
                </div>
                <div className="flex mx-auto max-w-md py-4 px-8 pt-4 bg-white shadow-lg rounded-lg">
                    <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
                </div>
            </main>
            
        </>
    )
}