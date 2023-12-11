const count = 100;

const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];

const isLogin = true;

const articleType = 3;

function getArticleTem() {
  if (articleType === 0) {
    return <div>no pic</div>;
  } else if (articleType === 1) {
    return <div>one pic</div>;
  } else {
    return <div>three pic</div>;
  }
}

function getName() {
  return "jack";
}

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

  const handleClick = (name, e) => {
    console.log("button clicked", name, e);
  };

  return (
    <div className="App">
      this is App
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
      <button onClick={(e) => handleClick('jack', e)}>click me</button>
    </div>
  );
}

export default App;
