import './Searchuser.css';
import React, {useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";

function Searchuser() {
    //ページの遷移に関連
    const navigate = useNavigate();
    //検索フォームのステイト
    const [searchResult, setSearchResult] = useState("");
    fetch('http://localhost:3000/searchuser/search', {
        method: 'POST',
        // HTTP リクエストのメソッド
        headers: {
            'Content-Type': 'application/json',
        },
        // サーバーへ送るファイルはJSONファイルであることを宣言
        body: JSON.stringify(searchResult)
    })
    .then(response => response.json())
    .then(data => { setSearchResult(data)})
    .catch((err) => console.error(err));
    
    //DBの全ユーザー検索
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8080/users") 
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));
    }, []);
    //searchResultに中身が入ったら（検索されたら）切り替わる
    const filteredUsers = users.filter((user) =>
    user.name.includes(searchResult)
    );

    return (
      <div className="Searchuser">
        <header className="Searchuser-header">
          <h1>会員検索</h1>
        </header>
        <input
          type="text"
          placeholder="名前で検索"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        />
      {filteredUsers.length > 0 ? (
      <table border="1" >
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (    
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td><button onClick={() => navigate(`/edituser/${user.id}`)}>編集</button></td>
              <td><button onClick={() => fetch(`http://localhost:8080/searchuser/delete/${user.id}`,{
                method:"delete",})
                .then((res) => {
                  if (res.ok) {
                    alert("削除しました");
                    setUsers(users.filter(nokoriuser => nokoriuser.id !== user.id));
                  } else {
                    alert("削除に失敗しました");
                  }
                })
                .catch((err) => console.error(err))
                }>削除</button></td>
            </tr>
          ))}
        </tbody>
      </table>      
      ):(
        <p>該当するユーザーがいません</p>
        )}
      <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    );
  }
  
  export default Searchuser;