package com.liskov.corrected;

public class Main {
    public static void main(String[] args) {
        Staff doctor = new Doctor();
        Staff admin = new Admin();

        doctor.doWork(); // assistPatient from MedicalStaff
        admin.doWork();  // non-medical task
    }
}
