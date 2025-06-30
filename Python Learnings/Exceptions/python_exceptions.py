# Python Exception Handling
class NegativeNumberError(Exception):
    pass

try:
    x = int(input("Enter a number: "))
    if x < 0:
        raise NegativeNumberError("Negative numbers are not allowed.")
    result = 10 / x
    print("Result:", result)
except ZeroDivisionError:
    print("Cannot divide by zero.")
except ValueError:
    print("Invalid input. Please enter a number.")
except NegativeNumberError as ne:
    print("Custom Exception:", ne)
except Exception as e:
    print("An unexpected error occurred:", e)
else:
    print("No exceptions occurred.")
finally:
    print("This block always executes.")
