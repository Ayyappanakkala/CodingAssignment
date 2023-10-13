package com.assignment;

public class Panagrem {
	public static boolean isPanagram(String str) {
		str = str.toLowerCase();
		for (char ch = 'a'; ch <= 'z'; ch++) {
		   if (str.indexOf(ch) == -1) {
			   return false;
		      }
		     }
		     return true;
		    }
	public static void main(String[] args) {
        String input = "The brown fox jumps over the lazy dog";
        boolean isPangram = isPanagram(input);
        System.out.println("Is it a pangram? " + isPangram);
    }
}
