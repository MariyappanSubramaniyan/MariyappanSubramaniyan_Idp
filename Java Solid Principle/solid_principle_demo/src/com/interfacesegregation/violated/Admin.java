package com.interfacesegregation.violated;

public class Admin implements HospitalWorker {
    public void treatPatient() {
        throw new UnsupportedOperationException("Admin doesn't treat patients.");
    }

    public void prescribeMedicine() {
        throw new UnsupportedOperationException("Admin doesn't prescribe medicine.");
    }

    public void manageStaff() {
        System.out.println("Admin manages staff.");
    }
}