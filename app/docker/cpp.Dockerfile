FROM gcc:latest
WORKDIR /app
COPY temp.cpp .
RUN g++ temp.cpp -o main
CMD ["./main"]
