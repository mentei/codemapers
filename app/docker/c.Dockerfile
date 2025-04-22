FROM gcc:latest
COPY temp.c /app/temp.c
WORKDIR /app
RUN gcc temp.c -o temp.out
CMD ["./temp.out"]
