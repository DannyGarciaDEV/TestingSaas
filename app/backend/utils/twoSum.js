const twoSum = (nums, target) => {
    const indices = {}; // grabs the data from indeces

    for (let i = 0; i < nums.length; i++) { //iterate through arrat 
        const complement = target - nums[i];
        if (complement in indices) { // if complement exist in indces
            return [indices[complement], i];
        }
        indices[nums[i]] = i;  //store the current element and its index in indices 
    }
    
    // If no such pair found, return empty array
    return [];
};

module.exports = twoSum;