package com.assignment9;

import java.util.Scanner;
import java.util.regex.*;

public class SentenceChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();

        Pattern p = Pattern.compile("^[A-Z].*\\.$");
        Matcher m = p.matcher(sentence);

        if (m.matches()) {
            System.out.println("Valid sentence (starts with capital and ends with period).");
        } else {
            System.out.println("Invalid sentence.");
        }

        sc.close();
    }
}
