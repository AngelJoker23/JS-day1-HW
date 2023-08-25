## 6kyu Challenge: Counting Duplicates Python Answer ##
def duplicate_count(text):
    text = text.lower()
    count = {i : text.count(i) for i in set(text)}
    count = sorted(count.values())
    result = 0
    for i in count:
        if i > 1:
            result += 1
    return result

##  6kyu Challenge: Sort the Odd Python Answer ##
def sort_array(source_array):
    oddSortedArray = sorted([x for x in source_array if x%2 != 0])
    n = 0

    for i, el in enumerate(source_array):
        if el%2 != 0:
            source_array[i] = oddSortedArray[n]
            n += 1
    return source_array

## 8kyu Challenge: Is He Gonna Survive? Python Answer ##
def hero(bullets, dragons):
    return bullets >= dragons * 2

## 8kyu Challenge: How Good Are You Really? Python Answer ##
def better_than_average(class_points, your_points):
    return your_points > sum(class_points) / len(class_points)
 