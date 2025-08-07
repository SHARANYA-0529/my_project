class Student:
    def __init__(self,name,roll):
        self.name=name
        self.roll=roll
    def display(self):
        print(f"Nmae: {self.name}, Roll no:{self.roll}")

s1=Student("Ravi",15)
s1.display()