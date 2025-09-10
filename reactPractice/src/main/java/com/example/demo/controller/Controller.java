package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.repository.UsersRepository;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
  @Autowired
  private UsersRepository userRepository;
  
  //ユーザー一覧
  @GetMapping("/users")
  public List<Users> getAllUser(){
	  return userRepository.findAll();
  }
  //
  @PostMapping("/searchuser/search")
  public List<Users> getUser(@RequestBody String name){
	  return userRepository.findByNameStartingWith(name);
  }
  //編集画面用ID検索
  @GetMapping("/searchuser/search/{id}")
  public Optional<Users> getUser(@PathVariable Long id){
	  return userRepository.findById(id);
  }
  
  
  //ユーザー追加
  @PostMapping("/adduser/add")
  public Users addUser(@RequestBody Users user){
	  return userRepository.save(user);
  }
  
  //ユーザー編集
  @PostMapping("edituser/{id}")
  public Users updateUser(@PathVariable Long id ,@RequestBody Users user){
	  Users updateUser = new Users();
	  updateUser = userRepository.findById(id).get();
	  updateUser.setName(user.getName()); 
	  return userRepository.save(updateUser);
  }
  
  // 削除
  @DeleteMapping("/searchuser/delete/{id}")
  public void deleteUser(@PathVariable Long id) {
      userRepository.deleteById(id);
  }
  
}
