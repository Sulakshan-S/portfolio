package com.example.portfolio.controller;

import com.example.portfolio.dto.LoginRequest;
import com.example.portfolio.model.Admin;
import com.example.portfolio.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.example.portfolio.dto.LoginResponse;
import com.example.portfolio.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final JwtUtil jwtUtil;
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request
    ) {

        Admin admin = adminRepository
                .findByUsername(request.getUsername())
                .orElse(null);

        if (admin == null) {
            return ResponseEntity.badRequest()
                    .body("Invalid Credentials");
        }

        if (
                !passwordEncoder.matches(
                        request.getPassword(),
                        admin.getPassword()
                )
        ) {
            return ResponseEntity.badRequest()
                    .body("Invalid Credential");
        }

        String token =
                jwtUtil.generateToken(
                        admin.getUsername()
                );

        return ResponseEntity.ok(
                new LoginResponse(token)
        );
    }
}