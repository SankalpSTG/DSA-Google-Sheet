def driver(arr, N)
    arr.insert(0, arr.pop())
    return arr

def main():
    N = int(input())
    arr = list(map(int, raw_input().split()))
    print(driver(arr, N))

main()