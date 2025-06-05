//2. Java program to check if the input string contains all letters from a to z (case-insensitive)

package com.assignment2;
import java.util.Scanner;

public class AlphabetChecker {
    public static boolean containsAllAlphabets(String s) {
        boolean[] seen = new boolean[26];
        int count = 0;
        for (char c : s.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                int idx = c - 'a';
                if (!seen[idx]) {
                    seen[idx] = true;
                    count++;
                    if (count == 26) return true;
                }
            }
        }
        return count == 26;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = sc.nextLine();
        if (containsAllAlphabets(input)) {
            System.out.println("The string contains all letters of the alphabet.");
        } else {
            System.out.println("The string does NOT contain all letters of the alphabet.");
        }
        sc.close();
    }

    // Time Complexity: O(n), where n is the length of the input string
    // Space Complexity: O(1), since the alphabet size is constant (26 letters)
}
