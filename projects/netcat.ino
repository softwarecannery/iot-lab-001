#include <ESP8266WiFi.h>
//#include <WiFiClient.h>
#include <Servo.h>

#define GPIO0 16
#define GPIO1 05
#define GPIO2 04
#define GPIO3 00
#define GPIO4 02
#define GPIO5 14
#define GPIO6 12
#define GPIO7 13
#define GPIO8 15
#define GPIO9 03
const char* ssid = "IoT";
const char* password = "minecraft99";

WiFiServer server(80);

void setup() {
  pinMode(GPIO0, OUTPUT);     
  pinMode(GPIO1, OUTPUT);     
  pinMode(GPIO2, OUTPUT);     
  pinMode(GPIO3, OUTPUT);     
  pinMode(GPIO4, OUTPUT);     
  pinMode(GPIO5, OUTPUT);     
  pinMode(GPIO6, OUTPUT);     
  pinMode(GPIO7, OUTPUT);     
  pinMode(GPIO8, OUTPUT);     
  
  Serial.begin(115200);
  setup_wifi();
  server.begin();
}

void setup_wifi() {
  delay(10);
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {

  if (WiFi.status() != WL_CONNECTED) {
    while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("-");}
  }

  WiFiClient client = server.available();

  if (client) {
    Serial.println("Client connected.");
    while (client.connected()) {
      if (client.available()) {

    switch (client.read()) {
    case '0':  
      digitalWrite(GPIO0,LOW); delay(2000); digitalWrite(GPIO0,HIGH); break;  
    case '1':  
      digitalWrite(GPIO1,LOW); delay(2000); digitalWrite(GPIO1,HIGH); break;  
    case '2':  
      digitalWrite(GPIO2,LOW); delay(2000); digitalWrite(GPIO2,HIGH); break;  
    case '3':  
      digitalWrite(GPIO3,LOW); delay(2000); digitalWrite(GPIO3,HIGH); break;  
    case '4':  
      digitalWrite(GPIO4,LOW); delay(2000); digitalWrite(GPIO4,HIGH); break;  
    case '5':  
      digitalWrite(GPIO5,LOW); delay(2000); digitalWrite(GPIO5,HIGH); break;  
    case '6':  
      digitalWrite(GPIO6,LOW); delay(2000); digitalWrite(GPIO6,HIGH); break;  
    case '7':  
      digitalWrite(GPIO7,LOW); delay(2000); digitalWrite(GPIO7,HIGH); break;  
    case '8':  
      digitalWrite(GPIO8,LOW); delay(2000); digitalWrite(GPIO8,HIGH); break;        
  }
}  
  delay(1);        // delay in between reads for stability
}
    Serial.println("Client disconnected.");
    client.stop();
  }
}
