package com.liskov.violated;

public class Doctor extends Staff {
    @Override
    public void assistPatient() {
        System.out.println("Doctor is diagnosing and treating the patient.");
    }
}
