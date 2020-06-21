from model import sunriseReport
from geopy.geocoders import Nominatim
from datetime import datetime,timedelta
import requests, os

class Controller:

    def getLocation(self, input_location):
        location = Nominatim(timeout=5).geocode(input_location, language='en_US')
        return location

    def getSunriseReport(self, data, location):
        # Date comes out in the wrong format
        date = data['date']

        latitude = str(location.latitude)
        longitude = str(location.longitude)

        sunriseSunset = []
        response = requests.get("https://api.sunrise-sunset.org/json?lat="+latitude+"&lng="+longitude+"&date="+date)
        jsonResponse = response.json()
        # Change both to GMT
        sunrise = jsonResponse['results']['sunrise']
        sunset = jsonResponse['results']['sunset']
        report = sunriseReport(date, sunrise, sunset)

        sunriseSunset.append(report)
        return sunriseSunset
