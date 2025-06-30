# Find the second largest element in the list
a = [10, 20, 4, 45, 99]
f = s = float('-inf')
for x in a:
    if x > f:
        s, f = f, x
    elif f > x > s:
        s = x
print(s)

# Alernate way
a = [10, 20, 46, 45, 99]
a.sort()
print(a[-2])

# Generator Function
def gen_func():
    yield 1
    yield 2
    yield 3
g = gen_func()
print(next(g))  # 1
print(next(g))  # 2

# Generator Expression
g = (x * x for x in range(3))
print(next(g))  # 0
print(next(g))  # 1


# Decorator chaining
def reception_check(f):
    def wrapper():
        print("Checked in at reception")
        f()
    return wrapper

def security_scan(f):
    def wrapper():
        print("Passed security scan")
        f()
    return wrapper

def id_badge_required(f):
    def wrapper():
        print("Wearing visitor badge")
        f()
    return wrapper

@reception_check
@security_scan
@id_badge_required
def meet_ceo():
    print("Meeting the CEO")
meet_ceo()
