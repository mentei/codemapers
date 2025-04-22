FROM bash:latest
WORKDIR /app
COPY ./temp/code.sh .
RUN chmod +x code.sh
CMD ["./code.sh"]
