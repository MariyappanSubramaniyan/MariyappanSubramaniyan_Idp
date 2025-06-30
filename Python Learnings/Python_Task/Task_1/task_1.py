# Edge Case 1: Only one element
# nums = [7]  # Output: 7

# Edge Case 2: Negative number
#nums = [-1, -2, -2]  # Output: -1

# Edge Case 3: Mixed positive and negative
# nums = [3, -3, 3]  # Output: -3

# Edge Case 4: Zero in the list
# nums = [0, 1, 1]  # Output: 0

# Edge Case 5a: Unique at the start
# nums = [5, 1, 1, 2, 2]  # Output: 5

# Edge Case 5b: Unique in the middle
# nums = [1, 2, 3, 2, 1]  # Output: 3

# Edge Case 5c: Unique at the end
# nums = [1, 2, 1, 2, 9]  # Output: 9

# Original Example

nums = [4, 1, 2, 1, 2]
res = 0
for n in nums:
    res ^= n
print(res)  # Output: 4

# Brute Force Code

nums = [4, 1, 2, 1, 2]
for i in nums:
    count = 0
    for j in nums:
        if i == j:
            count += 1
    if count == 1:
        print(i)
        break
