# Iterator in Python --> object for sequential access to elements in a collection, one at a time.
# Memory Efficient

nums = [1, 2, 3]
it = iter(nums)

print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
# print(next(it))  # Raises StopIteration

class EvenNumbers:
    def __init__(self, limit):
        self.num = 0
        self.limit = limit

    def __iter__(self):
        return self

    def __next__(self):
        if self.num > self.limit:
            raise StopIteration
        result = self.num
        self.num += 2
        return result

evens = EvenNumbers(6)
for e in evens:
    print(e)
