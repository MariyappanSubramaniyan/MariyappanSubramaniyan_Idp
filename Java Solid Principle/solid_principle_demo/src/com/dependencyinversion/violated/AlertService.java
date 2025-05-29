package com.dependencyinversion.violated;

public class AlertService {
    private EmailNotifier emailNotifier;

    public AlertService() {
        this.emailNotifier = new EmailNotifier(); // Direct dependency
    }

    public void sendAlert(String message) {
        emailNotifier.sendEmail(message);
    }
}
