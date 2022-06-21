#This function returns a new array with segregated elements
def driver(N, arr):
    posArr = []
    negArr = []
    index = 0
    for element in arr:
        if element >= 0:
            posArr.append(element)
        else:
            negArr.append(element)
    posArr.extend(negArr)
    return " ".join([str(x) for x in posArr])

#This function stores the solution in the input array itself
def driver(N, arr):
    j = 0
    for i in range(n):
        if(arr[j] < 0):
            curr = arr.pop(j)
            arr.append(curr)
            j -= 1
        j += 1
    return " ".join([str(x) for x in posArr])


def main():
    N = int(input())
    arr = list(map(int, raw_input().split()))
    print(driver(N, arr))

main()