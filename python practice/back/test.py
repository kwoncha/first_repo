from collections import deque

def bfs(x, y, dic, current):
    while q:
        x, y = q.popleft()
        if not visited[x][y]:
            visited[x][y] = True
            for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nx, ny = dx + x, dy + y
                if nx < 0 or nx >= n or ny < 0 or ny >= n:
                    continue
                if dic[arr[nx][ny]] == current and not visited[nx][ny]:
                    q.append((nx, ny))

def count_components(dic):
    count = 0
    for i in range(n):
        for j in range(n):
            if not visited[i][j]:
                q.append((i, j))
                current = dic[arr[i][j]]
                bfs(i, j, dic, current)
                count += 1
    return count

n = int(input())
arr = []
visited = [[False] * n for _ in range(n)]
for _ in range(n):
    a = input().strip()
    arr.append(a)

dic1 = {'R': 1, 'G': 1, 'B': 2}
dic2 = {'R': 1, 'G': 2, 'B': 3}
q = deque()

answer = count_components(dic2)
visited = [[False] * n for _ in range(n)]  # Reset visited array
result = count_components(dic1)

k = [answer, result]
for i in k:
    print(i)
    