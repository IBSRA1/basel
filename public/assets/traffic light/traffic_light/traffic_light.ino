// Traffic Light Control System
// Components: Arduino Uno, 3x LEDs (Red, Yellow, Green), 3x 220Ω Resistors
// Simulates automatic traffic light sequence

// LED Pins
const int redLED = 8;
const int yellowLED = 9;
const int greenLED = 10;

// Timing intervals (in milliseconds)
const int RED_TIME = 5000;      // Red light: 5 seconds
const int YELLOW_TIME = 2000;   // Yellow light: 2 seconds
const int GREEN_TIME = 5000;    // Green light: 5 seconds

void setup() {
  // Initialize Serial Monitor
  Serial.begin(9600);
  
  // Configure LED pins as outputs
  pinMode(redLED, OUTPUT);
  pinMode(yellowLED, OUTPUT);
  pinMode(greenLED, OUTPUT);
  
  // Start with all LEDs off
  allOff();
  
  Serial.println("Traffic Light System Started");
  Serial.println("Sequence: RED → GREEN → YELLOW → RED");
  delay(1000);
}

void loop() {
  // RED LIGHT - Stop
  Serial.println("🔴 RED LIGHT - STOP");
  digitalWrite(redLED, HIGH);
  digitalWrite(yellowLED, LOW);
  digitalWrite(greenLED, LOW);
  delay(RED_TIME);
  
  // GREEN LIGHT - Go
  Serial.println("🟢 GREEN LIGHT - GO");
  digitalWrite(redLED, LOW);
  digitalWrite(yellowLED, LOW);
  digitalWrite(greenLED, HIGH);
  delay(GREEN_TIME);
  
  // YELLOW LIGHT - Prepare to stop
  Serial.println("🟡 YELLOW LIGHT - CAUTION");
  digitalWrite(redLED, LOW);
  digitalWrite(yellowLED, HIGH);
  digitalWrite(greenLED, LOW);
  delay(YELLOW_TIME);
  
  // Cycle repeats
  Serial.println("---");
}

// Function: Turn off all LEDs
void allOff() {
  digitalWrite(redLED, LOW);
  digitalWrite(yellowLED, LOW);
  digitalWrite(greenLED, LOW);
}

// Function: Test all LEDs
void testLEDs() {
  Serial.println("Testing LEDs...");
  
  digitalWrite(redLED, HIGH);
  delay(500);
  digitalWrite(redLED, LOW);
  
  digitalWrite(yellowLED, HIGH);
  delay(500);
  digitalWrite(yellowLED, LOW);
  
  digitalWrite(greenLED, HIGH);
  delay(500);
  digitalWrite(greenLED, LOW);
  
  Serial.println("Test Complete");
}
