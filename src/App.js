import './App.css';
// import { useState } from 'react';
// import { axios } from 'axios';
// import useFetch from './useFetch';
import Slides from './Slides';
// import { Navbar } from './Navbar';

function App() {
  return <Slides />;
  // const [count, setCount] = useState(0);
  // const [pageNumber, setPageNumber] = useState(2);

  // const { data, error } = useFetch(`https://randomuser.me/api?page-${pageNumber}`);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  // const handleFetchNextUser = () => {
  //   setPageNumber(pageNumber + 1);
  //   console.log(pageNumber);
  // };

  // const displayUserInfo = (user) => {
  //   return (
  //     <div key={user.id.value}>
  //       <p>
  //         {user.name.first} {user.name.last}
  //       </p>
  //       <img src={user.picture.medium} alt="" />
  //     </div>
  //   );
  // };

  // when try to add map in the top then add {users}
  // it give me an error map can't iterate over null
  // means when you fetch data
  // I think its better to do it down below
  // const users = data.map((user) => {
  //   return (
  //     <div>
  //       <p>
  //         {user.name.first} {user.name.last}
  //       </p>
  //       <img src={user.picture.medium} alt="" />
  //     </div>
  //   );
  // });

  // return (
  //   <div className="App">
  //     {/* {data && <div>{data}</div>} */}
  //     {error && <p>{error}</p>}
  //     {data.length > 0 &&
  //       data.map((user) => {
  //         return displayUserInfo(user);
  //       })}
  //     <Navbar name="nono" />
  //     <Home />
  //     <p>{count}</p>
  //     <button onClick={handleClick}>click</button>

  //     <button onClick={handleFetchNextUser}>load more</button>
  //   </div>
  // );
}

export default App;
