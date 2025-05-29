package com.liskov.corrected;

public class Doctor extends MedicalStaff {
    @Override
    public void assistPatient() {
        System.out.println("Doctor is diagnosing and treating the patient.");
    }
}
