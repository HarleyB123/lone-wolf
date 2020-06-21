# Sunset Sunrise MVC
This is a simple MVC built with Python and Flask. Also a Frontend/Backend structure using React and Flask.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)

<a name="general-info"></a>
## General info

Based on the code-a-star blog [here](http://www.codeastar.com/flask-easy-web-app-python), I have decided to change it up so that it uses a sunset-sunrise API. This is a simple single page flask application built with Python that allows the user to enter a date and a location with the output producing the time the sun will rise and set on that particular day at the specified location. 

<a name="technologies"></a>
## Technologies

* Python, see requirements.txt
* React, see package.json
* Tailwind CSS

<a name="setup"></a>
## Setup

For python:

```
cd sunsetSunrise

pip install -r requirements.txt

pipenv run python3 view.py

python3 view.py
```
 

For Docker  

```
$ docker build -t sunrisesunset .
 
$ docker run -d --name sunrisesunset -p 8081:5000 sunrisesunset
```

Other Docker build and run instructions are in the Backend and Frontend README.md

<a name="features"></a>
## Features
* Allows any location in the world.
* Simple MVC with single page web display.


To-do list: 
* Found a cool AWS CodeDeploy tutorial [here](https://aws.amazon.com/blogs/devops/use-aws-codedeploy-to-implement-blue-green-deployments-for-aws-fargate-and-amazon-ecs/) to implement blue-green deployment on ECS. Put this into Terraform and deploy for the fully Flask SunriseSunsetMVC.
* Fully commented code.
* For the React Frontend/Flask Backend duo, get it in EKS (overkill, but I want to learn K8's 😅 ) - Currently CORS issue, read Kubernetes Up and Running!
* Structure the whole repo better
* Style whole MVC with tailwind css

<a name="status"></a>
## Status
Project is: In Progress

