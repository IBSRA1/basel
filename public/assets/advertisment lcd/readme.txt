BLUETOOTH LCD ADVERTISEMENT DISPLAY - WIRING GUIDE
==================================================

HARDWARE NEEDED:
- Arduino Uno
- HC-05 Bluetooth Module
- 16x2 I2C LCD Display
- Jumper wires

CONNECTIONS:
============

HC-05 TO ARDUINO:
-----------------
HC-05 VCC  →  Arduino 5V
HC-05 GND  →  Arduino GND
HC-05 TXD  →  Arduino Pin 10
HC-05 RXD  →  Arduino Pin 11

LCD TO ARDUINO:
---------------
LCD VCC  →  Arduino 5V
LCD GND  →  Arduino GND
LCD SDA  →  Arduino A4
LCD SCL  →  Arduino A5

MOBILE APP SETUP:
=================
1. Install "Serial Bluetooth Terminal" app
2. Pair with HC-05 (PIN: 1234)
3. Connect to HC-05 in app
4. Type message and send

MESSAGE EXAMPLES:
=================
"Hello World"           → Single line
"Line 1|Line 2"        → Two lines
"CLEAR"                → Clear display
"BACKLIGHT ON/OFF"     → Control backlight