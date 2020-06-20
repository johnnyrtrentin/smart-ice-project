
#include "WiFi.h"
#include <HTTPClient.h>

#include "ArduinoJson.h"

const char* ssid     = "";
const char* password =  "";

String endpointAPI = "https://stark-taiga-93289.herokuapp.com/api/";

// Making requests in every 10 seconds;
unsigned long lastTime   = 0;
unsigned long timerDelay = 10000;

void setup() {
  setSerialPort();
  connectWiFi();
}
 
void loop() {
 getDeviceStatus();
}

int deserializeRequest(String value) {
  char json[800];
  
  value.replace(" ", "");
  value.replace("\n", "");
  value.trim();
  value.remove(0, 1);
  value.toCharArray(json, 800);
  
  StaticJsonDocument <1024> doc;        
  deserializeJson(doc, json);

  const char* temperature = doc["temperature"];
  boolean deviceStatus = doc["status"];
  
  Serial.println(String(temperature) + "--" +deviceStatus + "\n");

  return deviceStatus;
}

void getDeviceStatus() {
  if ((millis() - lastTime) > timerDelay) {
    if (WiFi.status() == WL_CONNECTED) {
    
      HTTPClient http;
  
      String getAllDevices = endpointAPI + "device/all";

      http.begin(getAllDevices .c_str());
  
      int httpResponseCode = http.GET();

      if (httpResponseCode > 0) {
        Serial.print("HTTP status: ");
        Serial.println(httpResponseCode);

        String payload = http.getString();

        //device status == true
        if (deserializeRequest(payload) == 1) {
          Serial.println("true");
        } else {
          Serial.println("false");
        }
        
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
  WiFi.begin(ssid, password);
  
  Serial.print("Connecting!");

  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Trying to connect...");
  }

  Serial.print("Successfully connected in WiFi with the IP: ");
  Serial.println(WiFi.localIP());
}

void setSerialPort() {
  Serial.begin(115200);
}