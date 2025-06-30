class A:
    def show(self):
        print("A")

class B(A):
    def show_b(self):
        print("B")

class C:
    def show_c(self):
        print("C")

class D(B, C):
    def show_d(self):
        print("D")

d = D()
d.show()     # From A
d.show_b()   # From B
d.show_c()   # From C
d.show_d()   # From D