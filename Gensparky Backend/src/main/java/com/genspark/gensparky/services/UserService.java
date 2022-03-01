package com.genspark.gensparky.services;

import com.genspark.gensparky.entities.User;

import java.util.List;

public interface UserService {
    // get all
    List<User> getUsers();
    // get by id
    User getUser(Long Id);
    // add
    User adduser(User user);
    // update
    User updateUser(User user);
    // delete by id
    boolean deleteUserById(Long Id);  // returns true if user found and deleted, false if not found
}
