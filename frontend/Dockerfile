# Node.js 이미지 사용
FROM node:14

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package.json yarn.lock ./
RUN yarn install

# 소스 코드 복사
COPY . .

# React 앱 빌드
RUN yarn build

# Nginx를 사용하여 빌드된 앱 서빙
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
