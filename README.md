# 環境構築

## 使用するテーブルのCREATE文
テーブル名  
CREATE DATABASE react_kadai;

create table users (
    -> id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    -> name varchar(100) not null,
    ->  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);

## Home brewのインストール
ターミナルで下記コマンドを使用  
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

## Nodebrewのインストール
ターミナルで下記コマンドを使用  
```brew install nodebrew```  
下記コマンドが実行できたらインストール成功  
```node　-v```  

## Node.jsのインストール
```nodebrew ls-remote```  
を実行し、nodeのバージョンが複数表示されたら成功、エラーが出た場合は下記コマンド  
```nodebrew setup```  
これでまたnodebrew ls-remoteを実行してバージョンが表示されたらOK  
次に以下を実行  
```nodebrew install-binary stable```  
環境パスを通す  
bashの場合は以下。  
```echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile```  
zshでは以下になります。  
```echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zprofile```  
追記した後、ターミナルを再起動  
を実行  
```npm start```  
でreact動くようにする  

## Javaの環境構築
Homebrewを使ってインストール  
```brew install openjdk@21```  
以降表示に従ってコマンドを入力  

IDEのインストールは画像付きでみた方がわかるやすいので下記URLを見てインストールをお願いします  
https://qiita.com/iiko/items/04060864e1560c0a473a  

githubからコード落としたら対象のプロジェクトをIDEで選択して右クリックして実行→springbootを起動  
こちらも下記を参照  
https://qiita.com/HyunwookPark/items/142d4be2db9a6a540143  

これでhttp://localhost:3000/にアクセスすれば作成したページが表示されます  


参考記事:  
Nodeインストール  
[https://qiita.com/sakana_hug/items/7440df68734f3d5ce772](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)


