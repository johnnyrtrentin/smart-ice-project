#include "WiFi.h"
#include <HTTPClient.h>
#include <NTPClient.h>
#include "ArduinoJson.h"

const int relePin = 23;
int releStatus = 0;

const char* ssid     = "";
const char* password =  "";

String endpointAPI = "https://stark-taiga-93289.herokuapp.com/api/";
String turnOffTime = "22:30:00";

unsigned long lastTime   = 0;
unsigned long timerDelay = 10000;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "br.pool.ntp.org", 3600, 60000);

void setup() {
  setSerialPort();
  setReleConfig();
  connectWiFi();
  setUpTime();
}
 
void loop() {
  getCurrentTime();
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
  
  Serial.println(String("Status: ") + deviceStatus + "\n");

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
        String payload = http.getString();

        if (deserializeRequest(payload) == 1 && releStatus == 0) {
          turnOnDevice();
        } else if (deserializeRequest(payload) == 0 && releStatus == 1) {
          turnOffDevice();
        } else if (canTurnOffDevice()) {
          turnOffDevice();
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
  
  Serial.print("Connecting...");

  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Trying to connect...");
  }

  Serial.print("Successfully connected in WiFi with the IP: ");
  Serial.println(WiFi.localIP());
}

void getCurrentTime() {
  timeClient.update();
  delay(1000);
}

void setSerialPort() {
  Serial.begin(115200);
}

void setReleConfig() {
  pinMode(relePin, OUTPUT);
  digitalWrite(relePin, HIGH);
}

void setUpTime() {
  timeClient.begin();
}

void turnOnDevice() {
  Serial.println("Turning on the device!");
  
  digitalWrite(relePin, LOW);
  releStatus = 1;
  delay(200);
}

void turnOffDevice() {
  Serial.println("Turning off the device!");

  digitalWrite(relePin, HIGH);
  releStatus = 0;
  delay(200);
}

boolean canTurnOffDevice() {
  if (timeClient.getFormattedTime() == turnOffTime) {
    return true;
  } else {
    return false;
  }
}