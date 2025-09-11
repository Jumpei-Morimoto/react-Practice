# react-Practice

テーブル名
CREATE DATABASE react_kadai;

create table users (
    -> id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    -> name varchar(100) not null,
    ->  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
