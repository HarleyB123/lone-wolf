FROM python:3.6-slim-stretch
RUN pip install -U pip
COPY ./sunsetSunrise/requirements.txt .
RUN pipenv install -r requirements.txt
EXPOSE 5000
COPY ./sunsetSunrise /app
WORKDIR /app
CMD ["python3", "view.py"]
