package com.dependencyinversion.corrected;

public class AlertService {
    private Notifier notifier;

    public AlertService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void sendAlert(String message) {
        notifier.send(message);
    }
}
