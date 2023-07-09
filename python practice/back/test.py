import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort(reverse=True)

start = 1
end = sum(arr)
result = 0

while start <= end:
    mid = (start + end) // 2
    count = 0
    for i in range(len(arr)):
        if arr[i] > mid:
            count += arr[i] - mid

    if count >= m:
        result = mid
        start = mid + 1
    else:
        end = mid - 1

print(result)