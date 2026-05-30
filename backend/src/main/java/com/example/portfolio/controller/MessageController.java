package com.example.portfolio.controller;

import com.example.portfolio.model.Message;
import com.example.portfolio.dto.MessageRequest;
import com.example.portfolio.service.MessageService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins="http://localhost:5173")

public class MessageController {

    @Autowired
    private MessageService service;

    @PostMapping
    public ResponseEntity<Message> create(@Valid @RequestBody MessageRequest request){
        Message savedMessage = service.save(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedMessage);
    }

}
