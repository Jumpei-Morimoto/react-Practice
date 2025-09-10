import './Adduser.css';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Adduser() {
    const navigate = useNavigate();
     //ユーザー追加フォームのステイト
     const [name, setName] = useState("");
     //送信ボタン押したら呼ばれる処理
     const Submit = async (e) => {
     e.preventDefault(); 
     fetch('http://localhost:8080/adduser/add', {
         method: 'POST',
         // HTTP リクエストのメソッド
         headers: {
             'Content-Type': 'application/json',
         },
         // サーバーへ送るファイルはJSONファイルであることを宣言
         body: JSON.stringify({name:name})
     })
     .then((res) => {
      if (res.ok) {
        alert("登録しました");
      } else {
        alert("登録に失敗しました");
      }
    })
    .catch((err) => console.error(err))}

    return (
      <div className="Adduser">
        <header className="Adduser-header">
          <h1>会員登録</h1>
        </header>
        <form onSubmit={Submit}>
          <input
            type="text"
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">追加</button>
        </form>
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    );
  }
  
  export default Adduser;