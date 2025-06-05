// 4. Get the signup date and current date from the user and find valid KYC date range based on it
package com.assignment4;

import java.text.*;
import java.util.*;

public class KYCRangeChecker {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        sdf.setLenient(false);

        // Ask the user for number of entries
        System.out.print("Enter number of customers: ");
        int n = Integer.parseInt(sc.nextLine());

        for (int i = 0; i < n; i++) {
            System.out.print("Enter signup date and current date (dd-MM-yyyy dd-MM-yyyy): ");
            String[] dates = sc.nextLine().split(" ");
            Date signupDate = sdf.parse(dates[0]);
            Date currentDate = sdf.parse(dates[1]);

            Calendar signupCal = Calendar.getInstance();
            signupCal.setTime(signupDate);

            Calendar currCal = Calendar.getInstance();
            currCal.setTime(currentDate);

            // Get this year's anniversary
            Calendar anniversary = Calendar.getInstance();
            anniversary.set(Calendar.DAY_OF_MONTH, signupCal.get(Calendar.DAY_OF_MONTH));
            anniversary.set(Calendar.MONTH, signupCal.get(Calendar.MONTH));
            anniversary.set(Calendar.YEAR, currCal.get(Calendar.YEAR));

            // Use last year's anniversary if this year's is after the current date
            if (anniversary.after(currCal)) {
                anniversary.add(Calendar.YEAR, -1);
            }

            // Calculate start and end of valid KYC window
            Calendar startRange = (Calendar) anniversary.clone();
            startRange.add(Calendar.DAY_OF_YEAR, -30);

            Calendar endRange = (Calendar) anniversary.clone();
            endRange.add(Calendar.DAY_OF_YEAR, 30);

            // Check if current date is within the valid window
            if (currCal.before(startRange)) {
                System.out.println("No range");
            } else {
                Date start = startRange.getTime();
                Date end = currCal.before(endRange) ? currCal.getTime() : endRange.getTime();
                System.out.println("KYC window: " + sdf.format(start) + " to " + sdf.format(end));
            }
        }
    }
}
