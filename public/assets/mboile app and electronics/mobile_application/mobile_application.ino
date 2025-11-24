#include <SoftwareSerial.h>

// HC-05 Bluetooth on pins 2, 3
SoftwareSerial bluetooth(2, 3); // RX, TX

const int ledPin = 13;
char command;

void setup() {
  Serial.begin(9600);
  bluetooth.begin(9600);
  
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
  
  Serial.println("LED Control Ready");
}

void loop() {
  if (bluetooth.available()) {
    command = bluetooth.read();
    
    if (command == '1') {
      digitalWrite(ledPin, HIGH);
      bluetooth.println("LED ON");
    }
    else if (command == '0') {
      digitalWrite(ledPin, LOW);
      bluetooth.println("LED OFF");
    }
  }
}
