package com.assignment;
import java.util.Random;

public class shufflingNumbers {
	public static void Shuffle(int[] arr) {
		Random rand = new Random();
		for(int i=arr.length-1;i>0;i--) {
			int randValue = rand.nextInt(arr.length-1);
			int temp = arr[i];
			arr[i] = arr[randValue];
			arr[randValue] = temp;
		}
	}
	public static void main(String[] args) {
		int[] arrInput = {1, 2, 3, 4, 5, 6, 7};
		Shuffle(arrInput);
		System.out.print("Shuffled Array: ");
		for (int i = 0; i < arrInput.length; i++) {
            System.out.print(arrInput[i]);
            if (i < arrInput.length - 1) {
                System.out.print(", ");
            	}
			}
		}
}
