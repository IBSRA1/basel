// Bluetooth Advertisement Display System
// Components: Arduino Uno, HC-05 Bluetooth Module, I2C LCD (16x2)
// Receives text messages from mobile app and displays on LCD screen

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <SoftwareSerial.h>

// Initialize LCD with I2C address 0x27, 16 columns and 2 rows
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Bluetooth Module Pins (HC-05)
// RX Pin 10, TX Pin 11
SoftwareSerial bluetooth(10, 11); // RX, TX

// Variables for message handling
String receivedMessage = "";
String line1 = "";
String line2 = "";
bool newData = false;
unsigned long scrollTimer = 0;
int scrollPosition = 0;
bool isScrolling = false;

void setup() {
  // Initialize serial communication for debugging
  Serial.begin(9600);
  Serial.println("Bluetooth LCD Advertisement System");
  
  // Initialize Bluetooth communication
  bluetooth.begin(9600);
  Serial.println("Bluetooth initialized at 9600 baud");
  
  // Initialize LCD
  lcd.init();
  lcd.backlight();
  
  // Display welcome message
  displayWelcomeMessage();
  delay(3000);
  lcd.clear();
  
  // Show ready status
  lcd.setCursor(0, 0);
  lcd.print("Waiting for");
  lcd.setCursor(0, 1);
  lcd.print("message...");
}

void loop() {
  // Check for incoming Bluetooth data
  receiveBluetoothData();
  
  // Process and display new messages
  if (newData) {
    processMessage();
    displayMessage();
    newData = false;
  }
  
  // Handle scrolling for long messages
  if (isScrolling) {
    handleScrolling();
  }
}

// Function: Display welcome message on startup
// Added Value: Professional startup experience
void displayWelcomeMessage() {
  lcd.setCursor(0, 0);
  lcd.print("Advertisement");
  lcd.setCursor(0, 1);
  lcd.print("Display Ready!");
}

// Function: Receive data from Bluetooth module
// Added Value: Handles incoming messages from mobile app
void receiveBluetoothData() {
  while (bluetooth.available() > 0) {
    char inChar = bluetooth.read();
    
    // Check for message end marker (newline or carriage return)
    if (inChar == '\n' || inChar == '\r') {
      if (receivedMessage.length() > 0) {
        newData = true;
        Serial.println("Received: " + receivedMessage);
      }
    } else {
      // Add character to message
      receivedMessage += inChar;
    }
    
    delay(5); // Small delay for stable serial reading
  }
}

// Function: Process received message and split into lines
// Added Value: Intelligently formats text for 16x2 display
void processMessage() {
  receivedMessage.trim(); // Remove whitespace
  
  // Check if message contains separator (|) for two lines
  int separatorIndex = receivedMessage.indexOf('|');
  
  if (separatorIndex > 0) {
    // Message has explicit line separator
    line1 = receivedMessage.substring(0, separatorIndex);
    line2 = receivedMessage.substring(separatorIndex + 1);
    line1.trim();
    line2.trim();
  } else if (receivedMessage.length() <= 16) {
    // Short message - display on line 1 only
    line1 = receivedMessage;
    line2 = "";
  } else if (receivedMessage.length() <= 32) {
    // Medium message - split into two lines
    int splitPoint = findBestSplitPoint(receivedMessage);
    line1 = receivedMessage.substring(0, splitPoint);
    line2 = receivedMessage.substring(splitPoint);
    line1.trim();
    line2.trim();
  } else {
    // Long message - enable scrolling
    line1 = receivedMessage.substring(0, 16);
    line2 = receivedMessage.substring(16, min((int)receivedMessage.length(), 32));
    isScrolling = true;
    scrollPosition = 0;
  }
  
  // Clear received message for next input
  receivedMessage = "";
}

// Function: Find best point to split message between words
// Added Value: Prevents breaking words in the middle
int findBestSplitPoint(String msg) {
  if (msg.length() <= 16) return msg.length();
  
  // Look for space near position 16
  for (int i = 16; i >= 10; i--) {
    if (msg.charAt(i) == ' ') {
      return i + 1;
    }
  }
  
  // If no space found, split at 16
  return 16;
}

// Function: Display message on LCD screen
// Added Value: Clear, formatted display output
void displayMessage() {
  lcd.clear();
  
  // Display line 1
  lcd.setCursor(0, 0);
  if (line1.length() <= 16) {
    lcd.print(line1);
  } else {
    lcd.print(line1.substring(0, 16));
  }
  
  // Display line 2
  lcd.setCursor(0, 1);
  if (line2.length() <= 16) {
    lcd.print(line2);
  } else {
    lcd.print(line2.substring(0, 16));
  }
  
  Serial.println("Displayed:");
  Serial.println("Line 1: " + line1);
  Serial.println("Line 2: " + line2);
}

// Function: Handle scrolling text for long messages
// Added Value: Displays long messages through animation
void handleScrolling() {
  unsigned long currentTime = millis();
  
  // Scroll every 500ms
  if (currentTime - scrollTimer >= 500) {
    scrollTimer = currentTime;
    scrollPosition++;
    
    // Reset scroll when reaching end
    if (scrollPosition > line1.length() - 16) {
      scrollPosition = 0;
      isScrolling = false; // Stop scrolling after one cycle
    }
    
    // Update display with scrolled text
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print(line1.substring(scrollPosition, scrollPosition + 16));
    lcd.setCursor(0, 1);
    if (line2.length() > 0) {
      lcd.print(line2.substring(min(scrollPosition, (int)line2.length()), 
                                 min(scrollPosition + 16, (int)line2.length())));
    }
  }
}

// Function: Clear display and show waiting message
// Added Value: Provides feedback when ready for new input
void showWaitingMessage() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Send message");
  lcd.setCursor(0, 1);
  lcd.print("via Bluetooth");
}

// Function: Display connection status
// Added Value: Shows Bluetooth connection state
void displayConnectionStatus(bool connected) {
  lcd.clear();
  lcd.setCursor(0, 0);
  if (connected) {
    lcd.print("BT Connected!");
  } else {
    lcd.print("BT Disconnected");
  }
  delay(2000);
  showWaitingMessage();
}

// Function: Parse and execute special commands
// Added Value: Allows control commands from mobile app
void processCommand(String cmd) {
  cmd.toUpperCase();
  
  if (cmd == "CLEAR") {
    lcd.clear();
    line1 = "";
    line2 = "";
  } else if (cmd == "BACKLIGHT ON") {
    lcd.backlight();
  } else if (cmd == "BACKLIGHT OFF") {
    lcd.noBacklight();
  } else if (cmd == "STATUS") {
    // Send status back to mobile app
    bluetooth.println("LCD Ready");
    bluetooth.println("Display: 16x2");
  }
}
