package com.liskov.corrected;

public class Admin extends NonMedicalStaff {
    @Override
    public void doWork() {
        System.out.println("Admin is managing hospital operations.");
    }
}
