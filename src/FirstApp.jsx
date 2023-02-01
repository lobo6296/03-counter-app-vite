//funcion rafc
//import { Fragment } from 'react'

// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Jose Antonio'
// };

const getResult = () => {
  return 4 + 4;
}

export const FirstApp = ( {title, subTitle} ) => {

  //console.log(props)

  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>{subTitle+2}</p>
    </>
  );
}
