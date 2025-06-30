# Decorator --> function that helps to modify the behaviour without changing the actual code
def greet_decorator(func):
    def wrapper():
        print("Hello!")
        func()
        print("Goodbye!")
    return wrapper

@greet_decorator
def say_name():
    print("My name is Python.")

say_name()
