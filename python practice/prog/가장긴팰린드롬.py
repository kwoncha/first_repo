def solution(s):
    answer = 0
    length = len(s)
    
    for i in range(length):
        count = 1  # 현재 위치에서의 팰린드롬 길이
        start, end = i, i
        
        # 홀수 길이의 팰린드롬 검사
        while start > 0 and end < length - 1 and s[start - 1] == s[end + 1]:
            count += 2
            start -= 1
            end += 1
        
        answer = max(answer, count)
        
        count = 0  # 현재 위치와 다음 위치 사이에서의 팰린드롬 길이
        start, end = i, i + 1
        
        # 짝수 길이의 팰린드롬 검사
        while start >= 0 and end < length and s[start] == s[end]:
            count += 2
            start -= 1
            end += 1
        
        answer = max(answer, count)
    
    return answer