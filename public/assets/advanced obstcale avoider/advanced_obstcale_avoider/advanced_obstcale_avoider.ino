// Distance Measurement System with HC-SR04 and LCD Display
// Components: Arduino Uno, HC-SR04 Ultrasonic Sensor, I2C LCD (16x2)

#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Initialize LCD with I2C address 0x27, 16 columns and 2 rows
LiquidCrystal_I2C lcd(0x27, 16, 2);

// HC-SR04 Pin Definitions
const int trigPin = 9;
const int echoPin = 10;

// Variables for distance calculation
long duration;
float distanceCm;
float distanceInch;

void setup() {
  // Initialize serial communication for debugging
  Serial.begin(9600);
  
  // Initialize LCD
  lcd.init();
  lcd.backlight();
  
  // Configure HC-SR04 pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  
  // Display welcome message
  displayWelcomeMessage();
  delay(2000);
  lcd.clear();
}

void loop() {
  // Measure distance
  distanceCm = measureDistance();
  
  // Convert to inches
  distanceInch = distanceCm / 2.54;
  
  // Display on LCD
  displayDistance(distanceCm, distanceInch);
  
  // Print to Serial Monitor for debugging
  Serial.print("Distance: ");
  Serial.print(distanceCm);
  Serial.print(" cm, ");
  Serial.print(distanceInch);
  Serial.println(" inch");
  
  // Update every 500ms
  delay(500);
}

// Function: Display welcome message on startup
// Added Value: Provides user-friendly initialization feedback
void displayWelcomeMessage() {
  lcd.setCursor(0, 0);
  lcd.print("Distance Sensor");
  lcd.setCursor(0, 1);
  lcd.print("Initializing...");
}

// Function: Measure distance using HC-SR04 sensor
// Added Value: Returns accurate distance measurement in centimeters
float measureDistance() {
  // Clear trigger pin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Send 10 microsecond pulse to trigger pin
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read echo pin and calculate duration
  duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance in centimeters
  // Speed of sound = 343 m/s = 0.0343 cm/µs
  // Distance = (Time × Speed) / 2 (divided by 2 for round trip)
  float distance = duration * 0.0343 / 2;
  
  // Handle out-of-range readings
  if (distance > 400 || distance < 2) {
    return -1; // Invalid reading
  }
  
  return distance;
}

// Function: Display distance measurements on LCD screen
// Added Value: Provides clear, real-time visual feedback with dual units
void displayDistance(float cm, float inch) {
  lcd.clear();
  
  // Check for valid reading
  if (cm == -1) {
    lcd.setCursor(0, 0);
    lcd.print("Out of Range!");
    lcd.setCursor(0, 1);
    lcd.print("2-400 cm");
    return;
  }
  
  // Display distance in centimeters (Line 1)
  lcd.setCursor(0, 0);
  lcd.print("Dist: ");
  lcd.print(cm, 1); // 1 decimal place
  lcd.print(" cm");
  
  // Display distance in inches (Line 2)
  lcd.setCursor(0, 1);
  lcd.print("      ");
  lcd.print(inch, 1); // 1 decimal place
  lcd.print(" inch");
}

// Optional Function: Get average of multiple readings for better accuracy
// Added Value: Reduces measurement noise and improves reliability
float getAverageDistance(int samples) {
  float sum = 0;
  int validReadings = 0;
  
  for (int i = 0; i < samples; i++) {
    float reading = measureDistance();
    if (reading != -1) {
      sum += reading;
      validReadings++;
    }
    delay(50);
  }
  
  if (validReadings > 0) {
    return sum / validReadings;
  }
  return -1;
}
