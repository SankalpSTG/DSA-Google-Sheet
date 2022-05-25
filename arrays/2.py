def driver(N, arr):
    arr.sort()
    return "min = {} max = {}".format(arr[0], arr[N - 1])

def main():
    N = int(input())
    arr = list(map(int, input().split()))
    print(driver(N, arr))

main()