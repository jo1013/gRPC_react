# 유저 서비스와 유사한 구조
FROM golang:1.15 as builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o boardservice .
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/boardservice .
CMD ["./boardservice"]
