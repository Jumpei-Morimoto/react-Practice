import './Edituser.css';
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edituser() {
     const navigate = useNavigate();
     //ユーザーIDをURLから取得
     const { id } = useParams(); 
     //ユーザー情報表示用のステイト
     const [user, setUser] = useState("");
     //ユーザー編集フォームのステイト
     const [name, setName] = useState("");

     useEffect(() => {
      // ユーザー情報を取得
      fetch(`http://localhost:8080/searchuser/search/${id}`)
        .then(res => res.json())
        .then(data => setName(data.name));
    },[id]);
    
     //送信ボタン押したら呼ばれる処理
     const Submit = async (e) => {
     e.preventDefault(); 
     fetch(`http://localhost:8080/edituser/${id}`, {
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
        alert("更新しました");
      } else {
        alert("更新に失敗しました");
      }
    })
    .catch((err) => console.error(err))}

    return (
      <div className="Edituser">
        <header className="Adduser-header">
          <h1>編集</h1>
        </header>
        <form onSubmit={Submit}>
          <input
            type="text"
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">更新</button>
        </form>
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    );
  }
  
  export default Edituser;