package com.dependencyinversion.corrected;

public class SMSNotifier implements Notifier {
    public void send(String message) {
        System.out.println("SMS sent: " + message);
    }
}