package com.interfacesegregation.violated;

public class Doctor implements HospitalWorker{
    public void treatPatient() {
        System.out.println("Doctor treats the patient.");
    }

    public void prescribeMedicine() {
        System.out.println("Doctor prescribes medicine.");
    }

    public void manageStaff() {
        // Doctor usually doesn't do this
        System.out.println("Doctor reluctantly manages staff.");
    }
}
