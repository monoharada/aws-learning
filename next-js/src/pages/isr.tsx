import Head from "next/head";
import  styles  from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import { useRecoilState } from "recoil";
import { countState, userState } from "../components/atoms"
import Link from 'next/link'

type Props = {timestamp: number}

 export default function ISR(props:Props) {
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  const increment = (c: number) => {
    return c + 1;
  }

  const updateUser = (u: {name:string,age:number}) => {
    return { ...u, ...{ age: u.age + 1 } };
  }
   return (
    <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>ISRページ</h1>
      <p>count:{count}</p>
        <button onClick={() => setCount(increment)}>count increment</button>
        <p>user.name:{user.name}</p>
        <p>user.age:{user.age}</p>
        <button onClick={() => setUser(updateUser)}>age increment</button>
      <p> time: {props.timestamp}</p>
      <Link href="/"><a>Home</a></Link>
    </main>
  </div>
   )
 }

 export const getStaticProps: GetStaticProps<Props> = async context => {
   return  {
     props : {

       timestamp: new Date().getTime()
     },
     revalidate: 5,
   }

 }