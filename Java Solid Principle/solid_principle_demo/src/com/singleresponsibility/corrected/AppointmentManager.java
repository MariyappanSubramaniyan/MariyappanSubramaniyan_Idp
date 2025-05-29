package com.singleresponsibility.corrected;

public class AppointmentManager {
    public void bookAppointment(String patient, String doctor) {
        System.out.println("Booking appointment for " + patient + " with Dr. " + doctor);
    }
}
