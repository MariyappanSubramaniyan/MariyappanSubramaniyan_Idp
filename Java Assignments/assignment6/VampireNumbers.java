// 6. Finds and prints the first 100 Vampire numbers.
package com.assignment6;

import java.util.*;

public class VampireNumbers {
    public static void main(String[] args) {
        int count = 0;
        long num = 10;

        while (count < 100) {
            int len = String.valueOf(num).length();

            // Skip numbers with odd lengths since vampire numbers must have even digits
            if (len % 2 != 0) {
                num = (long) Math.pow(10, len); // jump to next length with one more digit
                continue;
            }

            int halfLen = len / 2;
            long low = (long) Math.pow(10, halfLen - 1);
            long high = (long) Math.pow(10, halfLen);

            // Try all possible factor pairs x * y = num within valid range
            for (long x = low; x < high; x++) {
                if (num % x != 0) continue;

                long y = num / x;

                // Check if y is in valid range
                if (y < low || y >= high) continue;

                // Skip if both factors end in zero
                if (x % 10 == 0 && y % 10 == 0) continue;

                // Check if sorted digits of num match sorted digits of x*y
                String digitsV = sortDigits(String.valueOf(num));
                String digitsXY = sortDigits(String.valueOf(x) + y);

                if (digitsV.equals(digitsXY)) {
                    System.out.println(num + " = " + x + " * " + y);
                    count++;
                    break; // Move to next number after finding a valid pair
                }
            }
            num++;
        }
    }

    // Sorts the digits of a number for comparison
    private static String sortDigits(String s) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}
