{
  function removeDuplicates(arr: number[]): number[] {
    let removeDuplicate: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (!removeDuplicate.includes(arr[i])) {
        removeDuplicate.push(arr[i]);
      }
    }
    return removeDuplicate;
  }

  // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
