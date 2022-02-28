import Head from 'next/head'
import Image from 'next/image'
import { auth } from '../app/firebaseApp';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../components/Header';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({categories}) {
  console.log('categories', categories);

  const [user] = useAuthState(auth);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        { false &&
          <div >
            <div>
              <h1>
              Hello {auth.currentUser.email}.
                <a onClick={() => {
                  auth.signOut();
                  router.push('/login');
                  }}>Sign-out</a>
              </h1>
            </div>
            <div>
              <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName}/>
            </div>
          </div>
        }
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:8083/graphql/',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query GetCategories {
      categories {
          id
          name
          items {
              id
              name
              nameEn
              imageUrl
          }
      }
    }
    `
  });

  return {
    props: {
      categories: data.categories
    }
  }
}