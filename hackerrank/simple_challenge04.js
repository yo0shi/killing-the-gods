function getSecondLargest(nums){
    if (nums.length > 1 && nums.length <= 100){
        for (let i = 0; i <= nums.length; ++i){
            for (let j = i + 1; j <= nums.length - 1; ++j){
                if (nums[j] > nums[i]){
                    let aux = nums[i];
                    nums[i] = nums[j];
                    nums[j] = aux;
                }
            }
        }

        for (const number of nums) {
            if (number < nums[0]){
                return number;
            }
        }

    } else {
        return nums[0];
    }
}

console.log(getSecondLargest([2, 3, 6, 6, 5, 4, 9, 7, 10, 15]));
