// 3. Calculates median ping time to a host by executing OS-specific ping command and parsing response times.
package com.assignment3;

import java.io.*;
import java.util.*;

public class PingMedianCalculator {

    public static double pingMedian(String host, int count) {
        List<Double> times = new ArrayList<>();
        try {
            String os = System.getProperty("os.name").toLowerCase();
            String cmd;

            if (os.contains("win")) {
                cmd = "ping -n " + count + " " + host;
            } else {
                cmd = "ping -c " + count + " " + host;
            }

            Process p = Runtime.getRuntime().exec(cmd);
            BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
            String line;

            while ((line = br.readLine()) != null) {
                Double time = extractTime(line, os);
                if (time != null) times.add(time);
            }

            if (times.isEmpty()) return -1;

            Collections.sort(times);
            System.out.println("Ping times: " + times);

            int mid = times.size() / 2;
            return times.size() % 2 == 0
                    ? (times.get(mid - 1) + times.get(mid)) / 2.0
                    : times.get(mid);

        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            return -1;
        }
    }

    private static Double extractTime(String line, String os) {
        try {
            if (os.contains("win") && line.contains("time=")) {
                int start = line.indexOf("time=") + 5;
                int end = line.indexOf("ms", start);
                return Double.parseDouble(line.substring(start, end).trim());
            } else if (!os.contains("win") && line.contains("time=")) {
                int start = line.indexOf("time=") + 5;
                int end = line.indexOf(" ms", start);
                return Double.parseDouble(line.substring(start, end).trim());
            }
        } catch (Exception e) {
            System.err.println("Failed to parse line: " + line + " | Error: " + e.getMessage());
        }

        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter host: ");
        String host = sc.nextLine();
        System.out.print("Enter ping count: ");
        int count = sc.nextInt();
        double median = pingMedian(host, count);
        System.out.println("Median ping time to " + host + " is: " + median + " ms");
    }

}

