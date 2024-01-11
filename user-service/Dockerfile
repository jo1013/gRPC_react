# 사용할 Go 버전을 지정
FROM golang:1.15 as builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 다운로드
COPY go.mod go.sum ./
RUN go mod download

# 소스 코드 복사
COPY . .

# 애플리케이션 빌드
RUN CGO_ENABLED=0 GOOS=linux go build -o userservice .

# 실행 이미지
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/userservice .

# 실행 명령
CMD ["./userservice"]
