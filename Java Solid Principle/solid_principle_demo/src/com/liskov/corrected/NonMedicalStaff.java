package com.liskov.corrected;

public abstract class NonMedicalStaff extends Staff {
    @Override
    public void doWork() {
        System.out.println("Performing non-medical tasks.");
    }
}
