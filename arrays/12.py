def driver():
    array.sort()
    if(array[0] != 1): return 1
    for i in range(len(array) - 1):
        if(array[i] + 1 < array[i + 1]):
            return array[i] + 1
    return array[-1] + 1

def main():
    N = int(input())
    
    driver()

main()