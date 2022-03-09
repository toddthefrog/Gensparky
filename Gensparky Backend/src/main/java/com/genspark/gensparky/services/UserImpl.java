package com.genspark.gensparky.services;

import com.genspark.gensparky.entities.User;
import com.genspark.gensparky.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserImpl implements UserService {

    @Autowired
    public UserRepo userRepo;

    public UserImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    @Override
    public User getUserById(Long Id) {
        return userRepo.getOne(Id);
    }

    @Override
    public User adduser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User updateUserById(Long Id, User user) {
        user.setId(Id);
        return userRepo.save(user);
    }

    @Override
    public boolean deleteUserById(Long Id) {
        try {
            userRepo.deleteById(Id);
            return true;
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return false;
    }

    @Override
    public User getUserByDiscordId(Long discordId) {
        return userRepo.getUserByDiscordName(discordId);
    }
}
