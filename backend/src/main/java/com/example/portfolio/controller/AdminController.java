package com.example.portfolio.controller;

import com.example.portfolio.dto.LoginRequest;
import com.example.portfolio.model.Admin;
import com.example.portfolio.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final AdminRepository adminRepository;

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

        if (!admin.getPassword().equals(request.getPassword())) {
            return ResponseEntity.badRequest()
                    .body("Invalid Credentials");
        }

        return ResponseEntity.ok("Login successful");
    }
}