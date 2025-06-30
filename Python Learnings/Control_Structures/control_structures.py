# Python Control Structures

# Conditional Statements

# if Statement
# Executes a block of code if a condition is True.
x = 10
if x > 5:
    print("x is greater than 5")

# if-else Statement
# Provides an alternative block if the condition is False.
x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")

# if-elif-else Statement
# Handles multiple conditions in sequence.
x = 5
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5")

# Loops
# Loops are used to execute a block of code multiple times.

# for Loop
# Iterates over a sequence like a list, tuple, or string.
for i in range(3):
    print(i)

# while Loop
# Repeats as long as a condition is True.
x = 0
while x < 3:
    print(x)
    x += 1

# Loop Control Statements
# Control the behavior of loops.

# break
# Exits the loop prematurely.
for i in range(5):
    if i == 3:
        break
    print(i)

# continue
# Skips the current iteration and continues with the next.
for i in range(5):
    if i == 2:
        continue
    print(i)

# pass
# Acts as a placeholder when a statement is required syntactically but no action is needed.
for i in range(3):
    pass  # Placeholder for future code
