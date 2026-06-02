package com.example.portfolio.service;

import com.example.portfolio.model.Message;
import com.example.portfolio.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository repository;

    public Message save(Message message) {
        message.setCreatedAt(LocalDateTime.now());
        return repository.save(message);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Message markAsRead(Long id) {

        Message message = repository.findById(id)
                .orElseThrow();

        message.setRead(true);

        return repository.save(message);
    }

    public List<Message> getAll() {
        return repository.findAll(
                Sort.by(Sort.Direction.DESC, "createdAt")
        );
    }
}