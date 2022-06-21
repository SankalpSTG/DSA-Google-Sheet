def driver(N, arr, S):
    start = 0
    currSum = 0
    for i in range(len(arr)):
        newSum = currSum + arr[i]
        if(newSum) > S:
            while(newSum > S):
                newSum -= arr[start]
                start += 1
        if(newSum == S):
            return [start + 1, i + 1]
        else:
            currSum = newSum
    return [-1]
            

def main():
    N = int(input())
    S = int(input())
    arr = list(map(int, raw_input().split()))
    print(driver(N, arr, S))

main()