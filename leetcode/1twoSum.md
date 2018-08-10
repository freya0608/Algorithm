#### Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
~~~
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
~~~


~~~
var twoSum = function(nums, target) {
     let arr = [],
        hash = {},
        len = nums.length,
        t1, index = 0, t2;
    while (index < len) {
        t2 = len - index - 1;
        hash[nums[t2]] = t2;
        t1 = hash[target - nums[index]];
        if (t1 !== undefined && t1 !== index) {
            arr.push(index)
            index > t1 ? arr.unshift(t1) : arr.push(t1);
            break;
        }
        hash[nums[index]] = index;
        index++;
    }
    return arr;
};
~~~