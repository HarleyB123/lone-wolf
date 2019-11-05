FROM python:3.6-slim-stretch
RUN pip install -U pip
RUN pip install pipenv
COPY ./sunsetSunrise/Pipfile .
COPY ./sunsetSunrise/Pipfile.lock .
RUN pipenv install --system
EXPOSE 5000
COPY ./sunsetSunrise /app
WORKDIR /app
CMD ["python3", "view.py"]
