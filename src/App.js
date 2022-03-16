import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Conter></Conter>
      <LoadComment></LoadComment>

    </div>
  );
}
function Comment(props) {
  return (
    <div>
      <h4>{props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}


function LoadComment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  return (
    <div>
      <h2>comments:{comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}



function Conter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => setCount(count + 1);
  const handelDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Conter:{count}</h1>
      <button onClick={handelIncrease}>Increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  )



}
export default App;
