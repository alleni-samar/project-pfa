package com.cafemanagement.cafemanagement.service;

import com.cafemanagement.cafemanagement.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User signup(User user);
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    User updateUser(Long id, User user);
    User findByEmail(String email);
    User loginUser(User user);
}
