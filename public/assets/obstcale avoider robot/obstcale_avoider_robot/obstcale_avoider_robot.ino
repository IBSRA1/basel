// Obstacle Avoiding Robot Car
// Components: Arduino Uno, L298N Motor Driver, 2x DC Motors, HC-SR04 Sensor, Battery
// Robot moves forward, detects obstacles, and turns to avoid them

// HC-SR04 Ultrasonic Sensor Pins
const int trigPin = A0;
const int echoPin = A1;

// L298N Motor Driver Pins
// Motor A (Right Motor)
const int ENA = 5;   // Speed control (PWM)
const int IN1 = 6;   // Direction
const int IN2 = 7;   // Direction

// Motor B (Left Motor)
const int ENB = 10;  // Speed control (PWM)
const int IN3 = 8;   // Direction
const int IN4 = 9;   // Direction

// Robot Parameters
const int SAFE_DISTANCE = 20;  // Stop if obstacle within 20cm
const int MOTOR_SPEED = 150;   // Speed (0-255)
const int TURN_TIME = 500;     // Turning duration (ms)

// Variables
long duration;
float distance;

void setup() {
  // Initialize Serial Monitor
  Serial.begin(9600);
  
  // Configure ultrasonic sensor pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  
  // Configure motor driver pins
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENB, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  
  Serial.println("Obstacle Avoiding Robot Started!");
  
  // Test motors briefly
  stopMotors();
  delay(1000);
}

void loop() {
  // Measure distance to obstacle
  distance = measureDistance();
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  // Decision making
  if (distance > SAFE_DISTANCE) {
    // Path is clear - move forward
    moveForward();
    Serial.println("Moving Forward");
  } 
  else {
    // Obstacle detected - avoid it
    Serial.println("Obstacle Detected!");
    avoidObstacle();
  }
  
  delay(100);
}

// Function: Measure distance using HC-SR04
float measureDistance() {
  // Clear trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Send pulse
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read echo
  duration = pulseIn(echoPin, HIGH, 30000); // 30ms timeout
  
  // Calculate distance
  float dist = duration * 0.0343 / 2;
  
  // Limit range
  if (dist > 400 || dist == 0) {
    return 400;
  }
  return dist;
}

// Function: Move robot forward
void moveForward() {
  // Right motor forward
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, MOTOR_SPEED);
  
  // Left motor forward
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, MOTOR_SPEED);
}

// Function: Move robot backward
void moveBackward() {
  // Right motor backward
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, MOTOR_SPEED);
  
  // Left motor backward
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENB, MOTOR_SPEED);
}

// Function: Turn robot right
void turnRight() {
  // Right motor backward
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, MOTOR_SPEED);
  
  // Left motor forward
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENB, MOTOR_SPEED);
}

// Function: Turn robot left
void turnLeft() {
  // Right motor forward
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, MOTOR_SPEED);
  
  // Left motor backward
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENB, MOTOR_SPEED);
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

// Function: Obstacle avoidance maneuver
void avoidObstacle() {
  // Stop immediately
  stopMotors();
  delay(300);
  
  // Back up
  Serial.println("Backing up...");
  moveBackward();
  delay(500);
  
  // Stop
  stopMotors();
  delay(200);
  
  // Scan left and right
  float leftDistance = scanLeft();
  delay(200);
  float rightDistance = scanRight();
  
  // Choose best direction
  if (leftDistance > rightDistance) {
    Serial.println("Turning Left");
    turnLeft();
    delay(TURN_TIME);
  } else {
    Serial.println("Turning Right");
    turnRight();
    delay(TURN_TIME);
  }
  
  // Stop after turn
  stopMotors();
  delay(200);
}

// Function: Scan left side (simulated)
float scanLeft() {
  // In advanced version, servo would rotate sensor
  // Here we just take a reading
  Serial.println("Scanning Left...");
  return measureDistance();
}

// Function: Scan right side (simulated)
float scanRight() {
  // In advanced version, servo would rotate sensor
  // Here we just take a reading
  Serial.println("Scanning Right...");
  return measureDistance();
}

// Additional function: Gradual speed control
void setMotorSpeed(int speed) {
  analogWrite(ENA, speed);
  analogWrite(ENB, speed);
}
