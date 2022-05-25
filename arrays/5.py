def driver(N, arr, K):
    arr.sort()
    return arr[K - 1]

def main():
    N = int(raw_input())
    arr = list(map(int, raw_input().split()))
    K = int(raw_input())
    print(driver(N, arr, K))

main()