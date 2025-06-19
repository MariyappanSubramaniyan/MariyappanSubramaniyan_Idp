/*
 Read a text file and count how many times each letter or digit appears,
 then write these counts sorted by character into an output file.
*/

package com.assignment11;
import java.io.*;
import java.util.*;


public class CharacterFrequencyCounter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the input file name: ");
        String inputFile = sc.nextLine();
        String outputFile = "char_count_output.txt";
        Map<Character, Integer> map = new HashMap<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
            int ch;
            while ((ch = reader.read()) != -1) {
                char c = (char) ch;
                if (Character.isLetterOrDigit(c)) {
                    map.put(c, map.getOrDefault(c, 0) + 1);
                }
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
            return;
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            List<Character> keys = new ArrayList<>(map.keySet());
            Collections.sort(keys);

            for (char c : keys) {
                writer.write("'" + c + "' : " + map.get(c));
                writer.newLine();
            }

            System.out.println("Character frequencies written to: " + outputFile);
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }
    }
}
