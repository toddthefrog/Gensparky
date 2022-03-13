package com.genspark.gensparky.controllers;

import com.genspark.gensparky.entities.User;
import com.genspark.gensparky.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://24.99.46.153")
public class UserController {

    @Autowired
    public UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

//    @CrossOrigin(origins = "http://localhost:8080")
    // get all users
    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    // get user by id
    @GetMapping("/users/{Id}")
    public User getUser(@PathVariable String Id){
        return userService.getUserById(Long.parseLong(Id));
    }

    // post user
    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return userService.adduser(user);
    }

//    @PutMapping("/users/{Id}")
    @PutMapping("/users/{Id}")
    public User updateUser(@PathVariable String Id, @RequestBody User user){
        return userService.updateUserById(Long.parseLong(Id), user);
    }

    // delete user by id
    @DeleteMapping("/users/{Id}")
    public boolean deleteUser(@PathVariable String Id){
        return userService.deleteUserById(Long.parseLong(Id));
    }

    @GetMapping("/users/discord_id/{Id}")
    public User getUserByDiscordId(@PathVariable String Id){
        return userService.getUserByDiscordId(Long.parseLong(Id));
    }

    @GetMapping("/users/bench")
    public List<User> getBenchUsers(){
        return userService.getBenchUsers();
    }

    @GetMapping("/users/trainees")
    public List<User> getTrainees(){
        return userService.getTrainees();
    }
}
