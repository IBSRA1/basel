# Mobile App Controlled LED via Bluetooth

## Project Description

This project allows you to control an LED remotely using your smartphone through Bluetooth connection. Simply send commands from a mobile app to turn the LED on, off, or make it blink in different patterns. It's a simple IoT project perfect for beginners learning wireless control systems.

## Hardware Required

1. **Arduino Uno** - Main microcontroller
2. **HC-05 Bluetooth Module** - Wireless communication
3. **LED (Red)** - Output indicator
4. **220Ω Resistor** - LED current limiter
5. **Breadboard** - For connections
6. **Jumper Wires** - 5-6 pieces

## Connections

### HC-05 Bluetooth Module:
- **VCC** → Arduino 5V
- **GND** → Arduino GND
- **TXD** → Arduino RX (Pin 0)
- **RXD** → Arduino TX (Pin 1)

### LED Circuit:
- **LED Anode (+)** → 220Ω Resistor → Arduino Pin 13
- **LED Cathode (-)** → GND

## Mobile App Commands

Send these characters from your Bluetooth app:

| Command | Action |
|---------|--------|
| **1** | Turn LED ON |
| **0** | Turn LED OFF |
| **B** | Blink 5 times (normal speed) |
| **F** | Fast blink 10 times |
| **S** | Slow blink 5 times |

## Mobile Apps to Use

### Android Apps:
1. **"Serial Bluetooth Terminal"** (Recommended)
2. **"Arduino Bluetooth Controller"**
3. **"Bluetooth Terminal"**
4. **"RemoteXY"**

### Setup Steps:
1. Install Bluetooth app from Play Store
2. Pair with HC-05 (PIN: 1234)
3. Connect to HC-05 in app
4. Send commands (1, 0, B, F, S)

## How It Works

1. **Bluetooth Connection**: HC-05 module creates wireless link between phone and Arduino
2. **Command Reception**: Arduino receives character commands via serial communication
3. **LED Control**: Based on command, Arduino controls LED on Pin 13
4. **Feedback**: Serial Monitor shows current LED status

## Features

✓ **Remote Control** - Control LED from up to 10 meters away
✓ **Simple Commands** - Easy single-character controls
✓ **Multiple Patterns** - ON, OFF, and various blink modes
✓ **Real-time Feedback** - Serial Monitor shows all actions
✓ **Expandable** - Add more LEDs or devices easily
✓ **Low Power** - Minimal power consumption

## Applications

- **Home Automation** - Control lights wirelessly
- **IoT Learning** - Understand wireless communication
- **Remote Indicators** - Status lights for projects
- **Smart Devices** - Building blocks for smart systems
- **Notification System** - Visual alerts from phone
- **Educational Projects** - Learn Arduino and Bluetooth

## Circuit Diagram Notes

Looking at your circuit:
- Arduino Uno is the main board
- HC-05 module (blue board with antenna) for Bluetooth
- Red LED connected to Pin 13 with 220Ω resistor
- Power supplied via USB or external power

## Troubleshooting

**LED not responding:**
- Check LED polarity (longer leg is positive)
- Verify resistor connection
- Test LED with simple blink sketch first

**Bluetooth won't connect:**
- Pair HC-05 first in phone settings (PIN: 1234)
- Check HC-05 LED is blinking
- Verify RX/TX connections
- Try baud rate 9600

**No data received:**
- Disconnect HC-05 when uploading code
- Check serial baud rate matches (9600)
- Send commands with newline character

## Upgrades & Extensions

1. **Multiple LEDs** - Control RGB LED for colors
2. **WiFi Version** - Use ESP8266/ESP32 instead
3. **Voice Control** - Integrate with voice commands
4. **Sensors** - Add automatic LED control based on sensors
5. **Web App** - Create web interface for control
6. **Scheduling** - Add timer-based LED control

## Safety Notes

⚠ Always use resistor with LED to prevent burnout
⚠ Check polarity before connecting LED
⚠ Don't connect/disconnect while powered on
⚠ HC-05 RXD is 3.3V tolerant (use voltage divider if needed)