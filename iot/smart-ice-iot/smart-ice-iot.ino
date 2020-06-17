#include "WiFi.h"
#include <HTTPClient.h>

const char* ssid     = "";
const char* password =  "";

String endpointAPI = "https://stark-taiga-93289.herokuapp.com/api/";

// Making requests in every 10 seconds;
unsigned long lastTime   = 0;
unsigned long timerDelay = 10000;

void setup() {

  connectWiFi();
}
 
void loop() {
 verifyArrivalTime();
}

void verifyArrivalTime() {
  if ((millis() - lastTime) > timerDelay) {
    if (WiFi.status() == WL_CONNECTED) {
    
      HTTPClient http;
  
      String getAllRoutes = endpointAPI + "user/location/all";
  
      http.begin(getAllRoutes.c_str());
  
      int httpResponseCode = http.GET();

      if (httpResponseCode > 0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        
        String payload = http.getString();
        Serial.println(payload);
  
      } else {
          Serial.print("Error code: ");
          Serial.println(httpResponseCode);
      }

      http.end();

    } else {
      Serial.println("WiFi Disconnected!");
  }

  lastTime = millis();
 }
}

void connectWiFi() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  
  Serial.print("Connecting");

  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("......");
  }

  Serial.print("Successfully connected in WiFi network with the IP: ");
  Serial.println(WiFi.localIP());
}
