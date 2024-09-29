package com.cafemanagement.cafemanagement.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/auth/signup", "/api/auth/login").permitAll()
                                .requestMatchers("/api/users/**").permitAll()

                                .requestMatchers("/api/category/**").permitAll()
                                .requestMatchers("/api/products/**").permitAll()
                                .requestMatchers("/api/auth/**").permitAll()
                                .requestMatchers("/api/bills/**").permitAll()
                                .anyRequest().authenticated()
                )
                .formLogin(formLogin -> formLogin.disable())
                .httpBasic();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails adminUser = User.builder()
                .username("samaralleni29@gmail.com")
                .password(passwordEncoder().encode("123"))
                .roles("ADMIN")
                .build();

        UserDetails adminUser1 = User.builder()
                .username("hou@gmail.com")
                .password(passwordEncoder().encode("12"))
                .roles("ADMIN")
                .build();

        UserDetails normalUser = User.builder()
                .username("normaluser@gmail.com")
                .password(passwordEncoder().encode("123"))
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(adminUser, adminUser1, normalUser);
    }
}
