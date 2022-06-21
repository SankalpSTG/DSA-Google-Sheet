def driver(a, m, b, n):
    newArr = a
    newArr.extend(b)
    newArr = set(newArr)
    return len(newArr)

def main():
    n, m = map(int, raw_input().split())
    a = list(map(int, raw_input().split()))
    b = list(map(int, raw_input().split()))
    print(driver(a, m, b, n))
main()