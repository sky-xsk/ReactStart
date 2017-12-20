import React from 'react';

//高阶组件

// const formTheme=(prop)=>({theme})=>theme[prop];

// const backgroundColor = formTheme('bgColor');

// const textColor = formTheme('textColor');

// const Button = style.button`background-color:${backgroundColor}
//             color:${textColor}`;

// <Button theme={theme.primary}>Submit</Button>

//高阶组件
// const HeroList=({heroes})=>(
//     <ul>
//         {
//             map((hero)=>(
//                 <li key={hero}>{hero}</li>
//             ),heroes)
//         }
//     </ul>
// )

const Gao = (props)=><h1>{props.children}</h1>;

