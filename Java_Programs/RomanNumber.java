package com.assignment;

import java.util.HashMap;

public class RomanNumber {
    public static int romanToNum(String s) {
        HashMap<String, Integer> number = new HashMap<>();
        number.put("I", 1);
        number.put("II", 2);
        number.put("III", 3);
        number.put("IV", 4);
        number.put("V", 5);
        number.put("VI", 6);
        number.put("VII", 7);
        number.put("VIII", 8);
        number.put("IX", 9);
        number.put("X", 10);

        int result = 0;
        int i = 0;
        while (i < s.length()) {
            // Check for two-character Roman numerals first
            if (i + 1 < s.length() && number.containsKey(s.substring(i, i + 2))) {
                result += number.get(s.substring(i, i + 2));
                i += 2;
            } else {
                result += number.get(s.substring(i, i + 1));
                i++;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        String romanNumeral = "IX";
        int result = romanToNum(romanNumeral);
        System.out.println("Roman numeral " + romanNumeral + " is equivalent to " + result);
    }
}
