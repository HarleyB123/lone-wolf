from flask import Flask, render_template, request
from flask_cors import CORS
from controller import Controller

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
   return render_template('index.html')

@app.route('/report', methods=['POST', 'GET'])
def ezw():
    if request.method == 'POST': 
       data = request.json
       location = data['location']

       sunriseController = Controller()

       geoLocation = sunriseController.getLocation(location)
       if geoLocation == None:
           searchArea = "Unknown location"
           reportTemplate = render_template('reports.html', area=searchArea)
           return reportTemplate 
       
       searchArea = geoLocation.address       
       sunriseReports = sunriseController.getSunriseReport(data, geoLocation)

       reportTemplate = render_template('reports.html', area=searchArea, reports=sunriseReports)

    return reportTemplate  

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')   
