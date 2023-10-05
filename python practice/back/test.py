import sys
input = sys.stdin.readline

n, m = map(int, input().split())
answer = [int(input()) for i in range(n)]
answer.sort()

start = 1
end = answer[-1] - answer[0]
result = 0

while start <= end:
    mid = (start + end) // 2
    value = answer[0]
    count = 1 
    for i in range(len(answer)):
        if answer[i] >= value + mid:
            value = answer[i]
            count += 1
    if count >= m:
        start = mid + 1
        result = mid
    else:
        end = mid - 1
        
print(result)