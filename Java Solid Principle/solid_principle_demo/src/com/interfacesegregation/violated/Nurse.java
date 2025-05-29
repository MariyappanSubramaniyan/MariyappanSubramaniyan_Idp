package com.interfacesegregation.violated;


public class Nurse implements HospitalWorker {
    public void treatPatient() {
        System.out.println("Nurse treats the patient.");
    }

    public void prescribeMedicine() {
        // Not allowed
        throw new UnsupportedOperationException("Nurse can't prescribe.");
    }

    public void manageStaff() {
        // Not allowed
        throw new UnsupportedOperationException("Nurse can't manage staff.");
    }
}