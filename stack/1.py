def getBooks(bookString, i = 0):
    #/u/love\i\
    allbooks = []
    while i < len(bookString):
        if(bookString[i] == '/'):
            books, i = getBooks(bookString, i + 1)
            allbooks.extend(books)
            i += 1
        elif(bookString[i] == '\\'): return (allbooks[::-1], i)
        else:
            allbooks.append(bookString[i])
            i += 1
    return (allbooks, i)

def main():
    bookString = input()
    books = getBooks(bookString)
    print("".join(x for x in books[0]))

main()