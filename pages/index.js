import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

const query = gql `
{
  posts {
    title
    slug
    excerpt
    slug
    id
    author {
      name
    }
    categories {
      name
    }
    content
  }
}
`;


export default function Home() {

  const {data, error, loading} = useQuery(query);

  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Main App</h1>

      {
        loading
          ? <h1>Loading...</h1>
          : (
            <>
              {
                data.posts.map(post => (
                  <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.excerpt}</p>
                  </div>
                ))
              }
            </>
          )
      }

      {/* {
        posts.map(post => {
          return (
            <div key={post.id}>
              {post.title}
            </div>
          )
        })
      } */}
      
    </div>
  )
}
