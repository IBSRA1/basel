// Ultrasonic Distance Alert System with Buzzer
// Components: Arduino Uno, HC-SR04 Sensor, Buzzer
// Buzzer beeps faster as object gets closer

// HC-SR04 Pins
const int trigPin = 9;
const int echoPin = 10;

// Buzzer Pin
const int buzzerPin = 8;

// Distance thresholds (in cm)
const int VERY_CLOSE = 10;   // Critical distance
const int CLOSE = 20;         // Warning distance
const int MEDIUM = 50;        // Caution distance
const int FAR = 100;          // Safe distance

// Variables
long duration;
float distance;

void setup() {
  // Initialize Serial Monitor
  Serial.begin(9600);
  
  // Configure pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  
  // Welcome message
  Serial.println("Distance Alert System Started");
  Serial.println("Buzzer beeps faster as object approaches");
  
  // Test buzzer
  tone(buzzerPin, 1000, 200);
  delay(500);
}

void loop() {
  // Measure distance
  distance = measureDistance();
  
  // Display distance
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  // Alert based on distance
  if (distance < VERY_CLOSE) {
    // CRITICAL: Continuous beeping
    tone(buzzerPin, 2000);
    Serial.println("⚠ CRITICAL - Very Close!");
    delay(100);
  } 
  else if (distance < CLOSE) {
    // WARNING: Fast beeping
    tone(buzzerPin, 1500, 100);
    Serial.println("⚠ WARNING - Close!");
    delay(200);
  } 
  else if (distance < MEDIUM) {
    // CAUTION: Medium beeping
    tone(buzzerPin, 1000, 100);
    Serial.println("⚠ CAUTION - Medium distance");
    delay(500);
  } 
  else if (distance < FAR) {
    // SAFE: Slow beeping
    tone(buzzerPin, 800, 50);
    Serial.println("✓ Safe distance");
    delay(1000);
  } 
  else {
    // OUT OF RANGE: No beeping
    noTone(buzzerPin);
    Serial.println("○ Out of range");
    delay(1000);
  }
}

// Function: Measure distance using HC-SR04
float measureDistance() {
  // Clear trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Send 10us pulse
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read echo pulse
  duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance (cm)
  float dist = duration * 0.0343 / 2;
  
  // Return valid range or max value
  if (dist > 400 || dist < 2) {
    return 400; // Out of range
  }
  return dist;
}
