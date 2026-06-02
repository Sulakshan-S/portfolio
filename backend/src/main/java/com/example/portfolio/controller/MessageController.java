package com.example.portfolio.controller;

import com.example.portfolio.model.Message;
import com.example.portfolio.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {

    private final MessageService service;

    @PostMapping
    public Message save(@RequestBody Message message) {
        return service.save(message);
    }

    @GetMapping
    public List<Message> getAll() {
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}/read")
    public Message markAsRead(
            @PathVariable Long id
    ) {
        return service.markAsRead(id);
    }
}