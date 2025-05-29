package com.singleresponsibility.violated;

public class AppointmentManager {
    public void bookAppointment(String patient, String doctor) {
        System.out.println("Booking appointment for " + patient + " with Dr. " + doctor);
        System.out.println("Sending notification to " + patient);
        System.out.println("Logging appointment booking for " + patient);
    }

    public static void main(String[] args) {
        AppointmentManager manager = new AppointmentManager();
        manager.bookAppointment("John Doe", "Smith");
    }
}
