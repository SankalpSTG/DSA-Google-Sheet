def driver(arr, n, k):
    m = [0] * 100000
    for i in range(0, n):
        m[arr[i]] += 1
    
    twice_count = 0
    for i in range(0, n):
        twice_count += m[k - arr[i]]
        if (k - arr[i] == arr[i]):
            twice_count -= 1
    return int(twice_count / 2)

def main():
    n, k = map(int, raw_input().split())
    arr = list(map(int, raw_input().split()))
    print(driver(arr, n, k))

main()