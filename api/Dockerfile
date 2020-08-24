FROM golang:latest as build-env

WORKDIR /go/src/app
ADD . /go/src/app

RUN go build -o /go/bin/app

FROM gcr.io/distroless/base
COPY --from=build-env /go/bin/app /

EXPOSE 3000
CMD ["/app"]