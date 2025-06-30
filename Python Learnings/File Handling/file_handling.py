# File Handling in Python

# Opening a File
f = open("data.txt", "r")

# Reading a File
f = open("data.txt", "r")
content = f.read()
print(content)
f.close()

# Writing to a File
f = open("data.txt", "w")
f.write("Hello, Mari")
f.close()

# Appending to a File
f = open("data.txt", "a")
f.write("\nNew line added")
f.close()

# Using with Statement
with open("data.txt", "r") as f:
    print(f.read())

# Check if File Exists
import os

if os.path.exists("data.txt"):
    print("File exists")
else:
    print("File not found")
