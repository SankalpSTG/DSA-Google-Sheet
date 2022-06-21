def driver(N, arr):
    arr.sort()
    return " ".join([str(x) for x in arr])

def main():
    N = int(input())
    arr = list(map(int, raw_input().split()))
    print(driver(N, arr))

main()