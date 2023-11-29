import { useState } from "react";
import './index.css'

// const count = 100;

// const list = [
//   { id: 1001, name: "Vue" },
//   { id: 1002, name: "React" },
//   { id: 1003, name: "Angular" },
// ];

// const isLogin = true;

// const articleType = 3;

// function getArticleTem() {
//   if (articleType === 0) {
//     return <div>no pic</div>;
//   } else if (articleType === 1) {
//     return <div>one pic</div>;
//   } else {
//     return <div>three pic</div>;
//   }
// }

// function getName() {
//   return "jack";
// }

function App() {
  // const handleClick = () => {
  //   console.log("button clicked");
  // };

  // const handleClick = (e) => {
  //   console.log("button clicked", e);
  // };

  // const handleClick = (name) => {
  //   console.log("button clicked", name);
  // };

  // const handleClick = (name, e) => {
  //   console.log("button clicked", name, e);
  // };

  // function Button() {
  //   return <button>click me!</button>
  // }

  // const Button = () => {
  //   return <button>click me!</button>;
  // };

  // let [count, setCount] = useState(0);

  // const handleClick = () => {
  //   // count++;
  //   // console.log(count);
  //   setCount(count + 1);
  // };

  // const [form, setForm] = useState({ name: "jack" });

  // const changeForm = () => {
  //   // form.name = 'john'
  //   setForm({ ...form, name: "john" });
  // };

  return (
    <div className="App">
      {/* this is App
      {"this is message"}
      {count}
      {getName()}
      {new Date().getDate()}
      <div style={{ color: "red" }}>this is div</div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {isLogin && <span>this is span</span>}
      {isLogin ? <span>jack</span> : <span>loading...</span>}
      {getArticleTem()}
      {/* <button onClick={handleClick}>click me </button> */}
      {/* <button onClick={() => handleClick("jack")}>click me</button> */}
      {/* <button onClick={(e) => handleClick("jack", e)}>click me</button>
      <Button />
      <Button></Button> */}
      {/* <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>change form {form.name}</button> */}
      <span className="foo">this is class foo</span>
    </div>
  );
}

export default App;