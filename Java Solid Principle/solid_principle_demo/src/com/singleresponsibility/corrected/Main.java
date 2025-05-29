package com.singleresponsibility.corrected;

public class Main {
    public static void main(String[] args) {
        AppointmentManager manager = new AppointmentManager();
        NotificationService notifier = new NotificationService();
        LoggerService logger = new LoggerService();

        manager.bookAppointment("John Doe", "Smith");
        notifier.sendNotification("Appointment confirmed for John Doe.");
        logger.log("Appointment booked for John Doe.");
    }
}
