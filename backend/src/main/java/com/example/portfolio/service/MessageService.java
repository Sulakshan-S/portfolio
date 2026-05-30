package com.example.portfolio.service;

import com.example.portfolio.model.Message;
import com.example.portfolio.repository.MessageRepository;
import com.example.portfolio.dto.MessageRequest;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    private final MessageRepository repository;
    private final EmailService emailService;

    public MessageService(
            MessageRepository repository,
            EmailService emailService
    ) {
        this.repository = repository;
        this.emailService = emailService;
    }

    public Message save(MessageRequest request) {

        Message message = new Message();

        message.setName(request.name());
        message.setEmail(request.email());
        message.setMessage(request.message());

        Message saved = repository.save(message);

        emailService.sendMessageEmail(saved);

        return saved;
    }
}