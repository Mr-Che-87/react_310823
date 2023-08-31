import React from 'react'
import './App.css';

/*
function App() {
  return <h2 style={{ color: "#ff0000" }}>fsdfsdf</h2>;
}
export default App;
*/


function App() {


function  Avatar({ person, size, onClick }) {  //деструктуризация пропса на отдельные переменные
  return (

    <img
      className="avatar"
      src={person.imageUrl}
      alt={person.name}
    data-country = {person.country}  //если в компоненте-контейнере не прописано это свойство  person.country
      width={size}
      height={size}
      onClick={onClick}
    />
  );
}



export default function Profile() {
  const testClickAvatar = () => {
    console.log(“Click!”)
  }

  return (
    <div>
          <Avatar       //<Avatar/> - благодаря «/» язык JSX  понимает, что этот тег должен вызывать function Avatar. Независимо от вложенности и тп 
        size={100}
        person={{ 
          name: 'Bill Gates',  //но имя на Майкл Джексон при этом могу изменить
         country: 'USA' //то внутри дочернего тега <Avatar>  я уже не могу добавить это свойство
          imageUrl: 'https://static01.nyt.com/images/2021/05/17/business/14altGates-print/14Gates--top-mediumSquareAt3X.jpg'
        }}
        onClick={testClickAvatar}
      />
      <Avatar
        size={80}
        person={{
          name: 'Steve Jobs', 
          imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        }}
        onClick={testClickAvatar}
      />
    </div>
  );
}



}


export default App;
