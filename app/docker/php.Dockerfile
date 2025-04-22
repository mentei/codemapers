FROM php:9.0-cli

WORKDIR /app

COPY code.php .

CMD ["php", "code.php"]
