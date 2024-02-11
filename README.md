# React-track-APP
```
Track in real time signal from optical sensor connected to Raspberry pi. 
Show data in table made for day and shifts - period time of this day.

React app serves visual web-app.
Raspberry Pi serves node-red flow with input of optical sensor
```

Used stack :hammer_and_wrench:
- React
- VITE
- Node-red
- Bootstrap 5
- Raspberry Pi


## How it works :grey_question:


### Home screen route :hut:
Physical optical sensor 5V connected to Raspberry Pi GPIO is triggered when light reflects from product (package-box) and send "1" to served on RPi Node-red GPIO.
React app get data by websocket from node-red.

![Home main screen](https://github.com/sowicz/React-track-app/blob/master/screenshots/main-screen.png)


When sensor is triggerend and data appear, button change option from disable and change color (color depends on setted target of packages sended by percetage f.e 20-50% red / 50-80% yellow / 80-100<% green)
- Click target button to show all packages that appear in this specific 'day' and 'shift'.
- Click on package to show information about it: date,time, status, can be more data depands on need.

![Data show when sensor is triggered](https://github.com/sowicz/React-track-app/blob/master/screenshots/data-triggering.png)


- Package Box details

![Package Box details](https://github.com/sowicz/React-track-app/blob/master/screenshots/box-details.png)


-Add day button in bottom of table add new row (new "day") with three shifts. 

![add day screen](https://github.com/sowicz/React-track-app/blob/master/screenshots/add-day.png)


-Start of collecting data in new day is setted from time its added. Could be change depends on needs.

![new day - new row](https://github.com/sowicz/React-track-app/blob/master/screenshots/new-day.png)



### Docs route :scroll:
Is simple interactive docs with screenshots.

![docs Rpi details](https://github.com/sowicz/React-track-app/blob/master/screenshots/rpi-details.png)



## How to use :white_check_mark:

in near future

> [!CAUTION]
> Data appeared after sensor is triggered doesn't save in database yet. After refreshing page it disappear.
