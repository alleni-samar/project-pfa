package com.cafemanagement.cafemanagement.controller;

import com.cafemanagement.cafemanagement.model.User;
import com.cafemanagement.cafemanagement.serviceImpl.UserServiceImpl;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if ((existingUser == null) || !passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
        return ResponseEntity.ok(new LoginResponse(existingUser.getEmail(), existingUser.getRole()));
    }
    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user) {
        User createdUser = userService.signup(user);
        return  new ResponseEntity<>(createdUser , HttpStatus.CREATED);
    }


    public static class LoginResponse {
        private String email;
        private String role;

        public LoginResponse(String email, String role) {
            this.email = email; // Corrected line
            this.role = role;
        }

        public String getEmail() {
            return email;
        }

        public String getRole() {
            return role;
        }
    }
}
