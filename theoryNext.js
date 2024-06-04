//* SSG (server-side generation) — генерация на стороне сервера!!
//* это техника, используемая в Next.js 
//* для генерации HTML-страниц во время сборки.

//* Она позволяет разработчикам предварительно рендерить страницы на сервере
//* и доставлять их в виде статических HTML-файлов клиенту.

//* Преимущества:
//* включая улучшенную производительность, 
//* оптимизацию для поисковых систем и улучшение пользовательского опыта.

//* Next - обертка над реакт
//* основная его суть, что старница рендерится на сервере
//* и мы получаем готовый html файл
//* Такой подход используется, потому что в SPA
//* есть проблемы с SEO
//* то етсь, поисковые роботы не могут индексировать сразу страницы
//* SPA. так как они приходять пустыми!!
//
//* Для создания большинства реакт используется утилита 
//* npx create-react-app
//* Для Next есть подобная утилита:
//* npx create-next-app
//
//* Но мы построим приложение с 0 и воспользуемся 
//* 1 - проинициализируем проект:
//* npm init -y  -> package.json
//* 2 - устанавливаем зависимости!!
//* npm i next react react-dom
//
//* теперь сделаем скрипт,
//* который будет запускать приложение в режиме разработки
//* scripts:
//* dev: next dev
//
//! папка pages - обязательное условие, которая лежит в корне!
//
//* Здесь будут располагаться все страницы, которые будут в приложении
//
//* pages -> index.js
//* файл index будет основным в приложении
//* именно с него будет начинаться сайт!!
//* Развернем компонент, импорт реакта не нужен!!
//
//* в индексе в теге h1 напишем что-то 
//* и с помощью npm run dev запустим приложение
//* сервер стартует на 3000 порту и страница откроется
// 
//* создадим 2ю страницу users.js
//* 
//* там будет список пользователей, который есть в нашем приложении
//* список пользователей
//* теперь этот компонент будет доступен по а0дресу localhost:3000/users
//
//* Сделаем навигационную панель в index.js,
//* с помощью которой мы будем перелючаться между этими страницами
//
//* <div>
//    <div>
//       <a href="/">Главная</a>
//       <a href="/users">Пользователи</a>
//    </div>
//    <h1>Главная страница</h1>
// </div>

//* Сейчас при пеерходе между страницами идет обновление!!
//* Чтобы этого не было, в Next есть Link to
//* который отключает действие браузера по умолчанию
//
//* импортируем Link из next
//* и уже внутрь этого компонента добавляем Главная
// <Link href="/">
//    Главная
// </Link>
//* то же самое делаем с пользователями
//
//* Теперь переход между страницами происходит без обновления браузера
//

//* прямо здесь в индексе внизу под <h1></h1>
//* можем написать стили
//* для начала зададим классовое имя как navbar диву, в котором Link
//* здесь все работает как в css
//* указываем селектор и пишем стили

{/* <div>
<div className='navbar'>
   <Link></Link>
</div>
<style jsx>
   {`
      .navbar {
        background: orange;
        padding: 15px;
      }
   `}
</style>
</div> */}

//* создадим классовые имена ссылкам и их поправим
//
// import Link from "next/link"


// const Index = () => {
//   return (
//     <div>
//       <div className='navbar'>
//          <Link href="/" className="link">
//             Главная
//          </Link>
//          <Link href="/users" className="link">
//             Пользователи
//          </Link>
//       </div>
//       <h1>Главная старница</h1>
//       <style jsx>
//          {`
//             .navbar{
//                background: orange;
//                padding: 15px;
//             }
//             .link {
//                text-decoration: none;
//                color: white;
//                font-size: 20px;
//                margin: 10px;
//             }
//          `}
//       </style>
//     </div>
//   )
// }

// export default Index

//
//* Динамическая маршрутизация - роутинг
//
//* users.js
//
//* создадим сотояние - по умолчанию это будет пустой массив
//* в который мы добавим несколько объектов
//* const [users, setUsers] = useState([
//*    {id: 1, name: 'Lena'},
//*    {id: 2, name: 'Kira'},
//* ])
//
//* отобразим этих пользователей на экране!!
//* под <h1></h1>
//* сделаем маркированный список и внутри него
//* с помощью мар пробегаемся по массиву
//* на каждой итерации получаем юзера,
//* и для каждого юзера отрисовываем имя {user.name}
//
//* 
// import { useState } from "react"

// const Users = () => {
//   const [users, setUsers] = useState([
//    {id: 1, name: 'Lena'},
//    {id: 2, name: 'Kira'},
//   ]) 
//   return (
//    <div>
//       <h1>Пользователи</h1>
//       <ul>
//          {users.map(user =>
//             <li>{user.name}</li>
//          )}
//       </ul>
//    </div>
//   )
// }

// export default Users

//* Если сейчас перейти на users/1
//* то такой страницы не существует,
//* потому что в ссылке должен быть их id
//* 
//* Для каждого пользователя должна быть уникальная ссылка
//
//* в Next с помощью папок можно создавать вложенные маршруты
//* pages -> users -> [id].js - по маршруту юзерс создадим еще один файл
//* название которого создается по шаблону - в квадратных скобках
//
//* [id].js - и потом этот id мы сможем выцеплять из url
//* создаем здесь экспорт дефолт фанкшен
//* это будет компонента
//* export default function () {
//* return (
//*    <div>Пользователь</div>
//*  )
//* }

//* теперь в Users.js надо сделать ссылку,
//* чтобы при нажатии на имя пользователя мы переходили в профиль!
//* id пользователя мы получаем из объекта самого пользователя
//* добавим ключ. чтобы реакт не ругался. так как
//* когда мар всегда нужно указывать клюя и 
//* index здесь не подходит, потому что они сдвигаются
//* а нам надо работать всегда с одним уникальным ключом
//
//* в {users.map(user =>
//*    <li key={user.id}>
//*        <Link href={`/users/${user.id}`}>
//*          {user.name}
//*        </Link>
//*    </li>   
//* )}

//* тепрь ссылки пользователей кликабельны
//* этот id можно выцепить и делать по нему запрос на сервер!!
//
//* идем в [id].js
//* посмотрим, как этот id можно получать!!
//* Нам понадобится хук useRouter из пакета Next
//* и с помощью этого хука получаем роутер!!
//* import {useRouter} from 'next/router'
//* const router = useRouter()
//* logi (router)
//* там есть сам url. несколько функция
//* нас интересует поле query -> в нем лежит поле id
//
//* этот ID мы можем выцеплять 
//* сразу сделав деструкторизацию и получать из useRouter сам query!!
//
//* const {query} = useRouter()
//
//* Теперь чтобы страница пользователя отличалась от другой
//* к надписи Пользователь добавим Id этого пользователя
//* <h1>Пользователь с Id {query.id}</h1>

//! Главная
//
//* видим в оранжевом блоке навбара 
//* - есть отступы от краев страницы!!
//* они задаются по умолчанию на страницу 
//* и их необходимо отключить
/- сделаем мы это глобальными стилями -/
//* 
//* корень - styles -> global.css
// * {
//    margin: 0;
//    padding: 0;
//    box-sizing: border-box;
// }
//
//! Global styles in Next
//* если сейчас импортировать стили в индекс, то будет ошибка
//* Next ругается, что глобальные стили 
//* не могут быть импортированы на какую-то отдельную страницу!!
//* 
//* откроем документацию Next.js
//* в документации есть вкладка про css и там есть про глобальные стили
//*
//! **************************************
//* создать файл pages -> _app.js
//* Это компонента, которая является оберткой над всем приложением
//! ******************************************
//* и поместить туда логику из документации импортируем туда глобальные стили!!
//* функция принимает любой компонент и пропсы страницы(параметры!!)
//* это как раз стили!!
//* и по итогу возвращает компонент /, а внутри него развоачиваются 
//* пропы {...pageProps} с этими примененными
//* пропсами(парамтрами стилей!!)
//* 
//? import '../styles/global.css';
//? export default function MyApp({ Component, pageProps}) {
//?    return <Component {...pageProps} />
//? }
//
//* Этот компонет файл обертка как раз для такого подключения стилей
//* СТРОГО _app.js
//

//! Link - ссылки 
//* выносим в отдельный компонент из index.js
//
//* в корне папку components -> A.js - компонент как ссылка,
//* только собственная, кстомная
//* создаем функцию экспорт по дефолту
//* внутри будет компонент Link из Next
//* пропсами функция примет text и путь (href)
//
//! A.js
//? import Link from "next/link";
//* здесь мы приняли параметры - пропсы
//? export default function ({text, href}) {
//?    return (
//?       <Link href={href}>
//?           {text}
//?       </Link>
//?    )
//? }

//* Идем в index.js и там этим параметрам-пропсам
//* присваиваем аргументы
//* в div navbar
//* вставляем этот компонент
//? <A href={'/'} text="Главная" />
//? <A href={'/users'} text="Пользователи" />

//* А старые Link поудаляем!!!!

//! index.js - было
// import Link from "next/link"

// const Index = () => {
//   return (
//     <div>
//       <div className='navbar'>
//          <Link href="/" className="link">
//             Главная
//          </Link>
//          <Link href="/users" className="link">
//             Пользователи
//          </Link>
//       </div>
//       <h1>Главная старница</h1>
//       {/* <style jsx>
//          {` см global.css  `}
//       </style> */}
//     </div>
//   )
// }
// export default Index

//! index.js - стало

//? import A from "../components/A"
//? const Index = () => {
//?   return (
//?     <div>
//?       <div className='navbar'>
//?!          <A href={'/'} text="Главная" />
//?!          <A href={'/users'} text="Пользователи" />
//?       </div>
//?       <h1>Главная старница</h1>
//?       {/* <style jsx>
//?          {` см global.css  `}
//?       </style> */}
//?     </div>
//?   )
//? }
//? export default Index

//*! Component.module.css
//* Подключение стилей для конкретных компонентов
//
//* чтобы стили применились к конкретному компоненту,
//* надо задать имя файла по определенному шаблону
//* A.module.css - пишем название компонента+module+css
//* а помто в компоненте применить к Link 
//* на ссылку применить классовое имя - className={styles.link}
//* например для link вынести в отдельный файл
//* A.module.css
// .link {
//    text-decoration: none;
//    color: white;
//    font-size: 20px;
//    margin: 10px;
// }
//* теперь надо подключить его к нашей кастомной ссылке!!!

//? export default function({text, href}) {
//?    return (
//?       <Link className={styles.link} href={href}>
//?          {text}
//?       </Link>
//?    )
//? }

//* в общем, стили можно писать как внутри jsx - внутри компонента
//* так и  импортировать в файлы со стилями
//* и чтобы next не вопспринимал стили как глобальные,
//* надо создавать их по определнному шаблону!
//
//! SCSS - препроцессор
//* npm i sass - подключаем
//* устанавливаем модуль и все готова
//* можно создавать файлы
//* User.module.scss
//? .user {
//?    h1 {
//?       color: red;
//?    }
//? }
//
//
//? import { useRouter } from "next/router";
//? import styles from "../../styles/User.module.scss";

//? export default function User() {
//?    const {query} = useRouter()
//?    return (
//?       <div className={styles.user}>
//?          <h1>Пользователь c ID {query.id}</h1>
//?       </div>
//?    )
//? }

//
//! Запросы на сервер!!
//* здесь это делается особым способом
//
//* Перейдем на сайт jsonplaceholder - предоставляет 
//* фейковые REST Api
//* Здесь можно получить users, posts и так далее
//* нам нужны users
//
//* скопируем ссылку
//* сделаем это так, как мы сделали это в реакте
//
//* через useEffect(() => {}, [])
//* сделаем колбэк async
//* создаем переменную res в ней воспользуемся fetch(`ссылка на фейковый рест апи`)
//* затем надо привести все к json
//* const data = await res.json()
//* setUsers(data) - в переменной data будет лежать массив пользователей

//? useEffect(async () => {
//?     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//?     const data = await res.json()
//?     setUsers(data)
//? }, [])
//
//* теперь заходим на страницу пользователей 
//* и там у нас саписок с именами с jsonplaceholder
// 
//* Но если мы посмотрим код старницы
//* то там попрежнему будут те имена, что были
//* То есть, серверный рендеринг не произошел
//* и подгрузка данных не произошла!!
//
//* ПОТОМУ ЧТО!
//* 
//* Идем в документацию  и ищем
//
//! getStaticProps
//! getServerProps

//user.js
//* листаем вниз и пишем функцию
//* эта функция обязательно должна возвращать пропсы
//* и эти пропсы по итогу попадут в наш компонент!!!
//
//
//? export async function getStaticProps(context) {
//?     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//?     const users = res.json()

//?     return {
//?       props: {users}
//?     }
//? }

//* убираем useEffect, useState
//? const [users, setUsers] = useState([
//?    {id: 1, name: 'Lena'},
//?    {id: 2, name: 'Kira'},
//?    {id: 3, name: 'Sveta'},
//?    {id: 4, name: 'Nadya'},
//?    {id: 5, name: 'Slon'},
//?    {id: 6, name: 'Mota'},
//?   ]) 

//?   useEffect(async () => {
//?      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//?      const data = await res.json()
//?      setUsers(data)
//?   }, [])

//
//* и наш компонент теперь должен принимать параметром как раз массив пропсов,
//* который мы возвращаем из функции getStaticProps - это users
//
//* Проверяем код страницы - рендеринг произошел на серверной части и по итогу 
//* мы получили пользователей с сервера

//* Этой функцией попробуем воспользоваться
//* при переходе на профиль конкретного пользователя!
//* [id].js
//* здесь мы будем получать одного user
//* возвращать тоже его
//! getStaticPath!! - 
//* для динамических маршрутов использовать getStaticPath()!!!!
//* динамичесвкий - переход на страницу пользоателя!!!
//
//* но в данном случае можно использовать
//! getServerSideProps()


//* обновляем старницу пользователя
//* так как эта функция выполняется на сервере,
//* логи получаем в терменале
// },
// query: { id: '1' }, //* есть поле 
// resolvedUrl: '/users/1',
// params: { id: '1' },  //*есть поле params
// locales: undefined,
// locale: undefined,
// defaultLocale: undefined
// }
//
//* есть поля, из которых мы можем выцепить id !!!!!

//* сразу же воспользуемся деструкторизацией и получим параметры
//* вместо (context) -> ({params}) -> { id: '1' }
//* теперь добавим к url в fetch запросе /${params.id}

//* это делается, чтобы при запросе на сервер получать 
//* конкретного пользователя при запросе id
//
//* в пропсах возвращаем user
//* в функцию передаем user!!
//* И в разметке ниже h1 напишем в блок div имя пользователя
//* и вставим его из пропса, который мы получаем в этом компоненте!!
//* <div>Имя пользователя {user.name}</div>
//? import { useRouter } from "next/router";
//? import styles from "../../styles/User.module.scss";

//? export default function User({user}) {
//?    const {query} = useRouter()
//?    return (
//?       <div className={styles.user}>
//?          <h1>Пользователь c ID {query.id}</h1>
//?          <div>Имя пользователя {user.name}</div>
//?       </div>
//?    )
//? }

//? export async function getServerSideProps({params}) {
//?    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//?    const user = await res.json()

//?    return {
//?       props: {user}
//?    }
//? }

//* при переходе на страницу пользоваеля:
// Пользователь c ID 1
// Имя пользователя Leanne Graham
//
//* с подгрузкой данных с сервера и функциями разобрались!!
//* getStaticProps() - для получения данных с сервера!!
//* getServerSideProps() - для динамических маршрутов
//* (переход на конкретного пользователя внутри старницы)
//
//! SSR 
//* основная проблема, которую решает server side rendering - 
//* Это SEO - оптимизация !!
//
//* Как ДОбавить Метатаги на конкретную страницу!?
//
//* посмотрим на примере главной
//* обернем ее в реакт фрагмент <></>
//* и поместим все внутрь
//* Метатеги используются обычно
//* На страницу добавляется HEAD
//* <Head></Head> - компонент импортируем из Next
//* и в нем, как и в html указываем тег <meta></meta>
//* и в нем укажем ключевые слова
//* <Head>
//* <meta keywords="ulbi tv, nextjs"></meta>
//* </Head>

//* Смотрим Код Страницы на Главной !!!
//* поиск по ключевым словам ctrl + F
//* вводим keywords - видим слова
//
//* Также внутри Head можем указать title = Главная страница
//* обновим и видим, что теперь вместо локалхост
//* вверху где вкладка надпись - Главная старинца

//! При переходе на страницу пользователя 
//* пропадает навигационная панелль
//* и мы не можем вернуться, а надо !!
//
//! MainContainer.js
//* Для этого используют контейнеры 
//* - это своего рода обертка,
//* которая содержит в себе НЕизменяемые!! 
//* части каждой страницы!!
//* сюда мы можем поместить Навбар!!
//* Также head с метадегами!
//* стили можно
//
//* components -> MainContainer.js
//* развернем
//* обернем внутри в реакт фрагмент
//
//* пропсами этот компонент будет принимать ({children}) !!
//* чтобы добавлялись все, что надо - другие компоненты
//* и из Индекса переместим туда наш Navbar!!
//* <div className='navbar'> все что внутри</div>
//
//* под ним ниже еще один блок div
//* и в него помещаем {children}
//
//* Так же, чтобы для каждой страницы не писать отдельно метатеги!!
//* вынесем их сюда же - в MainContainer!!
//
//* Метатеги для большинства старниц будут похожи,
//* а те, что не похожи, можно прокидывать через пропсы!!
//* оставим те, что есть уже в {'ulbi tv, nextjs' + keywords}
//* а те, что уникальные, добавим через плюс к перечислению
//* и будем прокидывать как пропсы
//* и добавим в пропсы к {children, keywords}
//* А теперь в index.js все завернем в MainContainer !!!
//* в users.js тоже все завернем в MAinContainer !!!!
//* [id].js - для каждого отдельного пользователя то же самое!!
//
//* все начинки компонентов помещаем в контейнер - начинки
//
//* Все норм!! Так как я стили вынесла ранее из index.js
//* то вся навигация видна и работает!!
//
//* Но также стили можно добавить и в MainContainer!!!
//
//* И поскольку ключевые слова мы принимаем как ппропсы,
//* мы можем передать их в каждый отдельный контейнер!!
//* Для каждой отдельной старинцы
//* Для главной 
//* <MainContainer keywords={"main page"}>
//*     <h1>Главная</h1>
//* </MainContainer>
//
//* на странице пользователей. например - {"users next js"}
//* и на старнице каждого пользователя - имя пользователя
//* на странице которого мы находимся - {user.name}

//
//* Пробуем перейти по несуществующий ссылке - 404
//* localhost:3000/uhisu
//* 
//* создадим логику этой страницы

//! 404.js
//* в корне папки page создается файл 404.js

// export default function Error () {
//    return (
//       <h1>
//          Моя кастомная страница с ошибкой
//       </h1>
//    )
// }
//* теперь при переходя по несуществующему url 
//* получаем строку с ошибкой
//
//
//! Deploy
//
//* package.json
//* добавляем туда 2 скрипта
//* 1 - build: next build - будет делать финальную сборку арр, мимифицировать файлы
//* 2 - start: next start - будет запускать приложение со
//
//* Далее , весь проект необходимо залить в Git репозиторий!!
//
//* создаем файл .gitignore
//* /.end
//* /node_modules - чтобы не загружать туда кипу файлов
//* /.idea
//* /.next - она генерируется , ели запустить скрипт build
//
//* далее проинициализируем git репозиторий
//* git init
//* создаем репозиторий в гитхабе