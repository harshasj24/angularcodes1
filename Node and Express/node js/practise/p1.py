arr=[]
for i in range(0,10):

    if i==4:
        arr.insert(0,i)
    elif i==5:
        arr.insert(1,i)
    else:
        arr.append(i)

print(arr)
for i in arr:
    print(i)