# Python String Methods 

# Case Conversion Methods

# upper()
print("hello".upper())  # 'HELLO'

# lower()
print("HELLO".lower())  # 'hello'


# capitalize()
print("python".capitalize())  # 'Python'

# title()
print("hello world".title())  # 'Hello World'

# Trimming and Alignment Methods

# strip()
print("  hello  ".strip())  # 'hello'

# lstrip() / rstrip()
print("  hello".lstrip())  # 'hello'
print("hello  ".rstrip())  # 'hello'

# center(width)
print("python".center(10))  # '  python  '

# Searching Methods

# find(sub) / rfind(sub)
print("banana".find("a"))   # 1
print("banana".rfind("a"))  # 5

# startswith() / endswith()
print("python".startswith("py"))  # True
print("python".endswith("on"))    # True

# Replace and Split Methods

# replace(old, new)
print("python is fun fun".replace("fun", "powerful"))  # 'python is powerful'


# split(sep)
print("one| two| three".split(" "))  # ['one', 'two', 'three']

# join(iterable)
print(",".join(['a', 'b', 'c']))  # 'a,b,c'


# Validation Methods

# isalpha()
print("hello".isalpha())  # True

# isdigit()
print("123".isdigit())  # True

# isalnum()
print("abc123".isalnum())  # True

# isspace()
print("   ".isspace())  # True
