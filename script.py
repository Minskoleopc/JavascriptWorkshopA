# x = 10
# print(x)
# x = 100
# print(x)

# # arithmetic 

# a = 10 
# b = 5

# print(a+b)
# print(a-b)
# print(a*b)
# print(a/b)
# print(a%b)

# s = 9
# t = 3

# print(s+t)
# print(s-t)
# print(s%t)
# print(s/t)
# print(s*t)

# def Calculator(x,y):
#     print(x+y)
#     print(x-y)
#     print(x*y)
#     print(x/y)
#     print(x%y)
# Calculator(12,4)
# Calculator(6,3)

# def add():
#     print(9+9)

# add()
# add()
# add()
# add()

# def addB(x,y):
#     print(x+y)
# addB(12,4)
# addB(12,3)

# def addC(x,y):
#     return x + y
# e = addC(12,4)
# print(e)
# print(e + e)
# print(e * 0.10)


i = 10
print(type(i))

i = 10.5
print(i)
print(type(i))

g = True 
print(g)
print(type(g))

h = "chinmay"
print(type(h))

# comparison operator
# < , > , <= , >= ,!= , ==

print(3 > 2)
print(3 < 2)
print(3 == 3)
print(3 == 2)
print(3 >= 2)
print(3 <= 2)
print(3 >= 3)
print(3 <= 3)

# and 
# true  and true  ---> true
# true  and false ---> false
# false and true  ---> false
# false and false ---> false
print(2 == 2 and 3 == 3)
print(2 != 2 and 3 == 3)
print(2 == 2 and 3 != 3)
print(2 != 2 and 3 != 3)


# or 

# true  or true  ---> true
# true  or false ---> true
# false or true  ---> true
# false or false ---> false


print(2 == 2 or 3 == 3)
print(2 != 2 or 3 == 3)
print(2 == 2 or 3 != 3)
print(2 != 2 or 3 != 3)

# not
# not false  --- true
# not true   --- false
print(not (3 == 3))
print(not (3 != 3))


# conditional statements 

numT = 5
if numT > 0 and numT <= 5:
    print("5 %  discount")
if numT > 5 and numT <= 10:
    print("10 %  discount")
if numT > 10:
    print("20 %  discount")




if numT > 0 and numT <= 5:
    print("5 %  discount")
elif numT > 5 and numT <= 10:
    print("10 %  discount")
elif numT > 10:
    print("20 %  discount")
else:
    print("incorrect input")


marks = 92

if marks > 90:
    print("grade A")
if marks >= 75:
    print("grade B")
if marks >= 65:
    print("grade C")


if marks > 90:
    print("grade A")
elif marks >= 75:
    print("grade B")
elif marks >= 65:
    print("grade C")
else:
    print("please try again")

d = 9
e = 3

print("d is greater") if d > e else print("f is greater")

age = 17

e = "candrive" if age >= 18 else "cannot drive" 
print(e)





