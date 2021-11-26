# sharp로 animated gif resize하기

libvips 8.9버전 이상이 필요하다: https://github.com/lovell/sharp/pull/2012

```shell
# mac
brew install libheif # heic -> jpg 변환을 위해서 필요
brew install vips # 2021년 10월 21일 기준 libipvs 8.11버전이 설치됨.
npm install
node index.js # homer-resized.gif 파일 생성됨
```

Linux에서 라이브러리 설치는 다음 저장소 
참고: https://git.baemin.in/manhwakyung/api/manhwakyung-image-api
