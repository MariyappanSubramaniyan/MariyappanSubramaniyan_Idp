package com.assignment12;

import java.util.*;
import java.util.stream.Collectors;

class Student {
    int id, age, yearOfEnrollment;
    String name, gender, engDepartment;
    double perTillDate;

    public Student(int id, String name, int age, String gender, String engDepartment, int yearOfEnrollment, double perTillDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.engDepartment = engDepartment;
        this.yearOfEnrollment = yearOfEnrollment;
        this.perTillDate = perTillDate;
    }

    @Override
    public String toString() {
        return name + " (" + engDepartment + ", " + gender + ", Age: " + age + ", Year: " + yearOfEnrollment + ", %" + perTillDate + ")";
    }
}

class StudentService {
    private List<Student> students;

    public StudentService(List<Student> students) {
        this.students = students;
    }

    // 1. Get all department names
    public Set<String> getAllDepartments() {
        return students.stream()
                .map(s -> s.engDepartment)
                .collect(Collectors.toSet());
    }

    // 2. Get names of students enrolled after 2018
    public List<String> getStudentsEnrolledAfter(int year) {
        return students.stream()
                .filter(s -> s.yearOfEnrollment > year)
                .map(s -> s.name)
                .collect(Collectors.toList());
    }

    // 3. Get all male students in Computer Science
    public List<Student> getMaleStudentsInCS() {
        return students.stream()
                .filter(s -> s.gender.equalsIgnoreCase("Male") && s.engDepartment.equalsIgnoreCase("Computer Science"))
                .collect(Collectors.toList());
    }

    // 4. Count male and female students
    public Map<String, Long> countByGender() {
        return students.stream()
                .collect(Collectors.groupingBy(s -> s.gender, Collectors.counting()));
    }

    // 5. Average age by gender
    public Map<String, Double> averageAgeByGender() {
        return students.stream()
                .collect(Collectors.groupingBy(s -> s.gender, Collectors.averagingInt(s -> s.age)));
    }

    // 6. Student with the highest percentage
    public Optional<Student> highestPercentageStudent() {
        return students.stream()
                .max(Comparator.comparingDouble(s -> s.perTillDate));
    }

    // 7. Count students per department
    public Map<String, Long> countByDepartment() {
        return students.stream()
                .collect(Collectors.groupingBy(s -> s.engDepartment, Collectors.counting()));
    }

    // 8. Average percentage per department
    public Map<String, Double> averagePercentageByDepartment() {
        return students.stream()
                .collect(Collectors.groupingBy(s -> s.engDepartment, Collectors.averagingDouble(s -> s.perTillDate)));
    }

    // 9. Youngest male student in Electronics
    public Optional<Student> youngestMaleInElectronics() {
        return students.stream()
                .filter(s -> s.gender.equalsIgnoreCase("Male") && s.engDepartment.equalsIgnoreCase("Electronic"))
                .min(Comparator.comparingInt(s -> s.age));
    }

    // 10. Count male and female students in Computer Science
    public Map<String, Long> countGenderInCS() {
        return students.stream()
                .filter(s -> s.engDepartment.equalsIgnoreCase("Computer Science"))
                .collect(Collectors.groupingBy(s -> s.gender, Collectors.counting()));
    }
}

public class StreamApiAssignment {
    public static void main(String[] args) {
        List<Student> studentList = Arrays.asList(
                new Student(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8),
                new Student(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2),
                new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3),
                new Student(144, "Murali Gowda", 18, "Male", "Electrical", 2018, 80),
                new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70),
                new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70),
                new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70),
                new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80),
                new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85),
                new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82),
                new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83),
                new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4),
                new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6),
                new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8),
                new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4),
                new Student(266, "Sanvi Pandey", 17, "Female", "Electrical", 2019, 72.4),
                new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5)
        );

        StudentService service = new StudentService(studentList);

        System.out.println("1. Departments: " + service.getAllDepartments());
        System.out.println("2. Students enrolled after 2018: " + service.getStudentsEnrolledAfter(2018));
        System.out.println("3. Male students in CS: " + service.getMaleStudentsInCS());
        System.out.println("4. Count by gender: " + service.countByGender());
        System.out.println("5. Average age by gender: " + service.averageAgeByGender());
        System.out.println("6. Student with highest percentage: " + service.highestPercentageStudent().orElse(null));
        System.out.println("7. Count by department: " + service.countByDepartment());
        System.out.println("8. Average percentage by department: " + service.averagePercentageByDepartment());
        System.out.println("9. Youngest male in Electronic: " + service.youngestMaleInElectronics().orElse(null));
        System.out.println("10. Male and Female count in CS: " + service.countGenderInCS());
    }
}

