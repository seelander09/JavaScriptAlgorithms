int makeArrayConsecutive2(int[] statues) {
    Arrays.sort(statues);
    return statues[statues.Length-1]-statues[0]-statues.Length+1;
}