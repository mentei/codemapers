FROM python:3.10
WORKDIR /app
COPY temp.py .
CMD ["python", "temp.py"]
