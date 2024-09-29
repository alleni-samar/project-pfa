package com.cafemanagement.cafemanagement.serviceImpl;

import com.cafemanagement.cafemanagement.model.User;
import com.cafemanagement.cafemanagement.repository.UserRepo;
import com.cafemanagement.cafemanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User signup(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }

    @Override
    public User updateUser(Long id, User user) {
        if (userRepo.existsById(id)) {
            user.setId(id);
            if (user.getPassword() != null && !user.getPassword().isEmpty()) {
                user.setPassword(passwordEncoder.encode(user.getPassword()));
            }
            return userRepo.save(user);
        }
        return null;
    }

    @Override
    public User findByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public User loginUser(User user) {
        // Authentication logic can be placed here
        // For now, we assume the user is authenticated if found
        return userRepo.findByEmail(user.getEmail());
    }
}
