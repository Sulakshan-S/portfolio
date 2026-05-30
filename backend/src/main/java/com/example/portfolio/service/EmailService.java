package com.example.portfolio.service;

import com.example.portfolio.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service

public class EmailService {

    @Autowired

    private JavaMailSender mailSender;

    public void sendMessageEmail(

            Message message

    ){

        SimpleMailMessage email =

                new SimpleMailMessage();

        email.setTo(

               "shanmuharasasulakshan@gmail.com"

        );

        email.setSubject(

                "New Portfolio Message"

        );

        email.setText(

                "Name : "

                        + message.getName()

                        +

                        "\nEmail : "

                        + message.getEmail()

                        +

                        "\n\nMessage : "

                        + message.getMessage()

        );

        mailSender.send(

                email

        );

    }

}