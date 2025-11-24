# Ultrasonic Distance Alert System

## Project Description

This is a proximity alert system that warns users when objects get too close using sound. The HC-SR04 ultrasonic sensor continuously measures distance, and a buzzer provides audio feedback - beeping faster as objects approach closer.

**How it works:**
- **Very Close (<10cm)**: Continuous loud beeping - CRITICAL
- **Close (10-20cm)**: Fast beeping - WARNING  
- **Medium (20-50cm)**: Medium beeping - CAUTION
- **Far (50-100cm)**: Slow beeping - SAFE
- **Out of range (>100cm)**: No sound

## Hardware Required

1. **Arduino Uno** - Main controller
2. **HC-SR04 Ultrasonic Sensor** - Distance measurement
3. **Buzzer (Passive or Active)** - Audio alert
4. **Breadboard** - For connections
5. **Jumper Wires** - 6 pieces

## Connections

### HC-SR04 to Arduino:
- VCC → 5V
- GND → GND
- TRIG → Pin 9
- ECHO → Pin 10

### Buzzer to Arduino:
- Positive (+) → Pin 8
- Negative (-) → GND

## Applications

- **Parking Assistant** - Car reverse sensors
- **Obstacle Detection** - Robotics navigation
- **Blind Spot Warning** - Safety systems
- **Security Alarm** - Intrusion detection
- **Smart Trash Can** - Lid open detection
- **Industrial Safety** - Proximity warnings

## Features

✓ Real-time distance monitoring
✓ Multi-level alert zones
✓ Adjustable distance thresholds
✓ Serial Monitor feedback
✓ Low power consumption
✓ Simple and reliable

## Distance Zones

| Distance | Status | Beep Speed | Tone |
|----------|--------|------------|------|
| 0-10 cm | CRITICAL | Continuous | 2000 Hz |
| 10-20 cm | WARNING | Fast (200ms) | 1500 Hz |
| 20-50 cm | CAUTION | Medium (500ms) | 1000 Hz |
| 50-100 cm | SAFE | Slow (1000ms) | 800 Hz |
| >100 cm | Out of Range | None | - |

## How to Use

1. Connect all components as shown in connections
2. Upload the Arduino code
3. Open Serial Monitor (9600 baud)
4. Move your hand in front of the sensor
5. Listen to buzzer beep patterns change
6. Watch distance readings in Serial Monitor

## Customization

You can adjust thresholds in the code:
```cpp
const int VERY_CLOSE = 10;  // Change to your needs
const int CLOSE = 20;
const int MEDIUM = 50;
const int FAR = 100;
```

You can also change buzzer tones:
```cpp
tone(buzzerPin, 2000);  // Change frequency (Hz)
```