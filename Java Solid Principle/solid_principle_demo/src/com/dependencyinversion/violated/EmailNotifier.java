package com.dependencyinversion.violated;

public class EmailNotifier {
    public void sendEmail(String message) {
        System.out.println("Email sent: " + message);
    }
}