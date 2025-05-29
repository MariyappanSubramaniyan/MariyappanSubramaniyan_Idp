package com.interfacesegregation.corrected;

public class Main {
    public static void main(String[] args) {
        Doctor doctor = new Doctor();
        Nurse nurse = new Nurse();
        Admin admin = new Admin();

        doctor.treatPatient();
        doctor.prescribeMedicine();

        nurse.treatPatient();

        admin.manageStaff();
    }
}
