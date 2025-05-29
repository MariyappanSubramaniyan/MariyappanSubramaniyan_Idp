package com.liskov.corrected;

public abstract class MedicalStaff extends Staff {
    public abstract void assistPatient();

    @Override
    public void doWork() {
        assistPatient();
    }
}
