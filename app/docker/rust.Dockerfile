FROM rust:latest
COPY main.rs /app/main.rs
WORKDIR /app
RUN rustc main.rs -o main
CMD ["./main"]
