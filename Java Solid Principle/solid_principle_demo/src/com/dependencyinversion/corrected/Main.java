package com.dependencyinversion.corrected;

public class Main {
    public static void main(String[] args) {
        Notifier email = new EmailNotifier();
        AlertService emailAlert = new AlertService(email);
        emailAlert.sendAlert("Patient emergency!");

        Notifier sms = new SMSNotifier();
        AlertService smsAlert = new AlertService(sms);
        smsAlert.sendAlert("Critical lab result!");
    }
}