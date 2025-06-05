// 1. Java program to search files in the home directory matching a user-provided regex pattern

package com.assignment1;

import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

// Import necessary classes and define package
// Scanner for input, File for file operations, Pattern/Matcher for regex handling

public class SearchFiles {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String homeDir = System.getProperty("user.home");
        File home = new File(homeDir);

        System.out.println("Welcome to File Search Tool (Type 'exit' to quit)");

        // Initialize scanner, get user's home directory, display welcome message

        while (true) {
            System.out.print("\nEnter regex pattern to search for files: ");
            String input = scanner.nextLine().trim();

            if (input.equalsIgnoreCase("exit")) {
                break;
            }

            // Prompt user for regex input; exit loop if user types "exit"

            Pattern pattern;
            try {
                pattern = Pattern.compile(input);
            } catch (Exception e) {
                System.out.println("Invalid regex pattern: " + e.getMessage());
                continue;
            }

            // Attempt to compile the regex pattern; show error if invalid

            System.out.println("Searching files matching pattern: " + input);
            int matchCount = searchFiles(home, pattern);
            System.out.println("Found " + matchCount + " file(s) matching the pattern.");

            // Start file search, count matches, and display result
        }

        scanner.close();
        System.out.println("Goodbye!");

        // Close scanner and print goodbye message
    }

    private static int searchFiles(File dir, Pattern pattern) {
        int matchCount = 0;
        File[] files = dir.listFiles();
        if (files == null) return 0;

        // Method to recursively search files in directories matching the regex pattern

        for (File file : files) {
            if (file.isDirectory()) {
                matchCount += searchFiles(file, pattern);
            } else {
                Matcher matcher = pattern.matcher(file.getName());
                if (matcher.find()) {
                    System.out.println(file.getAbsolutePath());
                    matchCount++;
                }
            }

            // Loop through each file/dir:
            // - If directory, search recursively
            // - If file, check name against regex and count matches
        }
        return matchCount;
    }
}