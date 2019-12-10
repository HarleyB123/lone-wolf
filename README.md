# Sunset-Sunrise MVC
This is a simple MVC built with Python and Flask. Currently In Progress.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)

<a name="general-info"></a>
## General info

Based on the code-a-star blog [here](http://www.codeastar.com/flask-easy-web-app-python), I have decided to change it up so that it uses a sunset-sunrise API. This is a simple single page flask application built with Python that allows the user to enter a date and a location with the output producing the time the sun will rise and set on that particular day at the specified location. 

See here (http://sunrise.harleybates.co.uk/) for demo

<a name="technologies"></a>
## Technologies

* See Pipfile

<a name="setup"></a>
## Setup

For python, run ezw_app.py 

For Docker  

$docker build -t sunrisesunset .
 
$docker run -d --name sunrisesunset -p 8081:5000 sunrisesunset

<a name="features"></a>
## Features
* Allows any location in the world
* Simple MVC with single page web display
* Pipeline to update task definition in AWS.


To-do list: 
* Document the process of changing the code to fit the sunrise-sunset API on LinkedIn.
* Move to an ECS container on AWS and add a domain.
* Put the above into Terraform.
* Fully commented code

<a name="status"></a>
## Status
Project is: In Progress

