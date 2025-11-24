// Bluetooth Controlled Robot Car
// Components: Arduino Uno, L298N Motor Driver, 2x DC Motors, HC-05 Bluetooth, Battery
// Control robot remotely from mobile app

#include <SoftwareSerial.h>

// Bluetooth Module Pins
SoftwareSerial bluetooth(2, 3); // RX, TX

// L298N Motor Driver Pins
// Motor A (Right Motor)
const int ENA = 5;   // Speed control (PWM)
const int IN1 = 6;   // Direction
const int IN2 = 7;   // Direction

// Motor B (Left Motor)
const int ENB = 10;  // Speed control (PWM)
const int IN3 = 8;   // Direction
const int IN4 = 9;   // Direction

// Speed Settings
int motorSpeed = 200;  // Default speed (0-255)

// Variables
char command;

void setup() {
  // Initialize Serial Monitor
  Serial.begin(9600);
  bluetooth.begin(9600);
  
  // Configure motor pins
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENB, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  
  // Start with motors stopped
  stopMotors();
  
  Serial.println("Bluetooth Robot Car Ready!");
  Serial.println("Commands: F=Forward, B=Back, L=Left, R=Right, S=Stop");
  Serial.println("Speed: 0-9 (0=slowest, 9=fastest)");
}

void loop() {
  // Check for Bluetooth commands
  if (bluetooth.available() > 0) {
    command = bluetooth.read();
    Serial.print("Command: ");
    Serial.println(command);
    
    // Execute command
    executeCommand(command);
  }
  
  // Also accept commands from Serial Monitor for testing
  if (Serial.available() > 0) {
    command = Serial.read();
    executeCommand(command);
  }
}

// Function: Execute movement commands
void executeCommand(char cmd) {
  switch (cmd) {
    case 'F':  // Forward
    case 'f':
      moveForward();
      bluetooth.println("Moving Forward");
      break;
      
    case 'B':  // Backward
    case 'b':
      moveBackward();
      bluetooth.println("Moving Backward");
      break;
      
    case 'L':  // Left
    case 'l':
      turnLeft();
      bluetooth.println("Turning Left");
      break;
      
    case 'R':  // Right
    case 'r':
      turnRight();
      bluetooth.println("Turning Right");
      break;
      
    case 'S':  // Stop
    case 's':
      stopMotors();
      bluetooth.println("Stopped");
      break;
      
    // Speed control (0-9)
    case '0':
      motorSpeed = 0;
      bluetooth.println("Speed: 0%");
      break;
    case '1':
      motorSpeed = 50;
      bluetooth.println("Speed: 20%");
      break;
    case '2':
      motorSpeed = 75;
      bluetooth.println("Speed: 30%");
      break;
    case '3':
      motorSpeed = 100;
      bluetooth.println("Speed: 40%");
      break;
    case '4':
      motorSpeed = 125;
      bluetooth.println("Speed: 50%");
      break;
    case '5':
      motorSpeed = 150;
      bluetooth.println("Speed: 60%");
      break;
    case '6':
      motorSpeed = 175;
      bluetooth.println("Speed: 70%");
      break;
    case '7':
      motorSpeed = 200;
      bluetooth.println("Speed: 80%");
      break;
    case '8':
      motorSpeed = 225;
      bluetooth.println("Speed: 90%");
      break;
    case '9':
      motorSpeed = 255;
      bluetooth.println("Speed: 100%");
      break;
      
    default:
      bluetooth.println("Unknown command");
      break;
  }
}

// Function: Move forward
void moveForward() {
  // Right motor forward
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, motorSpeed);
  
  // Left motor forward
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, motorSpeed);
}

// Function: Move backward
void moveBackward() {
  // Right motor backward
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, motorSpeed);
  
  // Left motor backward
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENB, motorSpeed);
}

// Function: Turn left
void turnLeft() {
  // Right motor forward
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, motorSpeed);
  
  // Left motor backward
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENB, motorSpeed);
}

// Function: Turn right
void turnRight() {
  // Right motor backward
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, motorSpeed);
  
  // Left motor forward
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, motorSpeed);
}

// Function: Stop all motors
void stopMotors() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 0);
  
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, 0);
}

// Function: Gradual turn left (softer)
void softTurnLeft() {
  // Right motor full speed
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, motorSpeed);
  
  // Left motor slower
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, motorSpeed / 2);
}

// Function: Gradual turn right (softer)
void softTurnRight() {
  // Right motor slower
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, motorSpeed / 2);
  
  // Left motor full speed
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, motorSpeed);
}
