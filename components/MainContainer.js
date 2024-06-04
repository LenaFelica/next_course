import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keywords}) => {
  return (
   <>
   <Head>
      <meta keywords={"ulbi tv, nextjs " + keywords}></meta>
      <title>Главная страница</title>
   </Head>
   <div className='navbar'>
         <A href={'/'} text="Главная" />
         <A href={'/users'} text="Пользователи" />
   </div>
   <div>{children}</div>
   </>
  )
}

export default MainContainer;