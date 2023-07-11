---
title: Track solar power with wemos and mqtt
date: 2020-06-07
layout: layouts/blogSidebar.njk
featuredText: I recently became the prouwd owner of some nice solar panels on my roof. And allong with that a new project for me started to figure out when we should consume the most energie to use all the solar power we get in our advandge.
thumb: /assets/post/trackSolarPowerWithWemosAndMQTT/mqtthead.jpg
hero: /assets/post/trackSolarPowerWithWemosAndMQTT/mqtthead.jpg
tags: tech
---

I recently became the prouwd owner of some nice solar panels on my roof. And allong with that a new project for me started to figure out when we should consume the most energie to use all the solar power we get in our advandge. So in this simple project we are going to create a trafic light that is listening to a mqtt subscription. When the value go's above a certain threshold we will change the light of the traficlight

## What do you need?
* A wemos mini D1 (I am using the lite version)
* Green, red and yellow or orange led
* 3 resistors +- 100 ohm (what is best for your LED)
* A breadboard
* Wires
* MQTT broker (I installed one on my Synology)
* MQTT Data publisher


For the leds you can also use a trafic light there the resistors etc are already included. That is the one I am using in the tutorial.

## the MQTT broker
For the MQTT server I installed [Eclipse Mosquitto](https://mosquitto.org/ "Eclipse Mosquitto Homepage") which was fairly easy to do with this [Youtube video](https://www.youtube.com/watch?v=b3A1RJdDf-w "video how to install Mosquitto on synology"). You can also install Mosquitto on an Raspberry pi an nice tutorial for that one you can find here: [Tutorial install Mosquitto on RPI](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/ "tutorial install Mosquitto"). When that is done remember your ipadress of the broker you will need it in a later state.

## MQTT datapublisher
The Solar panel system that I have does not give an API to hook into so I had to get creative in getting the data in how much power is being delivered from the solar panels. This step is Ithink different for everyone in how to publish your data to the broker. 

In the Netherlands we have something that is called the "Slimme meter" translated to english Smart meter. Which basically measures your power consumption only digitally. This meter is also capable to measure the power you are delivering back the the grid. And most importantly we are able to tabinto this data with an P1 cable (Basically a Serial to usb cable).

So for me this became fairly simple. I hooked up a raspberry pi with the P1 cable installed [P1 monitor](https://www.ztatz.nl/p1-monitor-download-202009/ "p1 monitor download page") which basically gives you alle the insights in the smart meter. And it has some cool funtionality to publish data to an MQTT broker. 

### Settings for publishing data to your MQTT broker

In order to publish data to your MQTT broker you login on your P1 monitor and go to the settings page. Her you will find a tab called MQTT. here you can set up the MQTT client parameters. Ive been using thses parameters:

* Client ID: A value to recognize the client I used defauld p1monitor
* Topic prefix: If you ever going to share more data its good to prefix the data I used default p1monitor
* Broker servername/IP: Ipadress of the server or url if you use an remote one
* Broker IP port: the port that is open for you default is 1883
* Broker keep alive time: is basically to check if the connection is still open I kept it default at 60seconds.
* Broker username and password. That is fully up to you to fill in :D
* Protocal version that I am using is MQTT V3.1.1

And I am only sending smartmeter data at the moment. Dont forget to hit save at the right top of the screen can fast be over looked.

## Setup WEMOS mini D1 and Arduino IDE



## A simple circuit

Now we have our data flowing in to the MQTT broker we can work our way to the client. Lets start by creating a simple circuit. In this circuit you can see how I wired the led's. In the diagram below I have added the one with resistors. If you are using the traficlight like I do in the example then you can wire the wires directly (resistor are already integrated). The following pins are connected to the certain led's:

* Green D8
* Yellow/ Orange D7
* Red D6
* and all led Ground cables to the ground pin.

## WEMOS CODE step 1
First lets try if our circuit is working properly by turning on the LED's one by one. In the example code below we are doing tht time based. to have them all light up once.

```c
int YLED = D7; // Digital pin 7 Yellow LED
int GLED = D8; // Digital pin 8 Green LED
int RLED = D6; // Digital pin 6 Red LED

String trafficLightStatus = "";

void updateTrafficLight() {
  // This method changes the light that has to go on or off. Its put in a seperate method
  // For later in this tutorial
  if(trafficLightStatus == "GREEN" && digitalRead(GLED) != HIGH ){
    digitalWrite(GLED, HIGH); // Turning a pin to high means power will go to that pin
    digitalWrite(YLED, LOW); // Turning a pin to LOW means power will be removed from that pin
    digitalWrite(RLED, LOW);
  }
  if(trafficLightStatus == "YELLOW" && digitalRead(YLED) != HIGH ){
    digitalWrite(GLED, LOW);
    digitalWrite(YLED, HIGH);
    digitalWrite(RLED, LOW);
   }
   if(trafficLightStatus == "RED" && digitalRead(RLED) != HIGH) {
    digitalWrite(GLED, LOW);
    digitalWrite(YLED, LOW);
    digitalWrite(RLED, HIGH);
   }
}

void setup() {
  pinMode(YLED, OUTPUT); // Make YLED pin D7 an output pin
  pinMode(GLED, OUTPUT); // Make BLED pin D6 an output pin
  pinMode(RLED, OUTPUT); // Make BLED pin D6 an output pin
  pinMode(BUILTIN_LED, OUTPUT);     // Initialize the BUILTIN_LED pin as an output
}

void loop() {
    // First we make the status green
    trafficLightStatus = "GREEN";
    updateTrafficLight();
    delay(1000); // waits a second to continue
    trafficLightStatus = "YELLOW";
    updateTrafficLight();
    delay(1000); // waits a second to continue
    trafficLightStatus = "RED";
    updateTrafficLight();
    delay(1000); // waits a second to continue and restarts loop
}
```

After compiling and uploading the code your leds should be lighting up in a simmiliar way like this: 
(gifje van lampjes)
