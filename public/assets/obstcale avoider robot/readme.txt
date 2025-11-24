# Obstacle Avoiding Robot Car

## Project Description

This is an autonomous robot car that navigates by itself, avoiding obstacles in its path. Using an ultrasonic sensor as its "eyes," the robot continuously scans ahead, moves forward when the path is clear, and automatically stops, backs up, and turns when it detects obstacles. It's a perfect beginner robotics project demonstrating sensors, motor control, and decision-making logic.

**How it works:**
1. Robot moves forward continuously
2. Ultrasonic sensor measures distance ahead
3. If obstacle detected (<20cm), robot stops
4. Robot backs up and scans left/right
5. Robot turns toward the clearer path
6. Continues moving forward

## Hardware Required

1. **Arduino Uno** - Brain of the robot
2. **L298N Motor Driver Module** (Red board) - Controls motors
3. **2x DC Motors** (with wheels) - Drives the robot
4. **HC-SR04 Ultrasonic Sensor** - Detects obstacles
5. **2x AA Battery Holder** - Power supply (6V-9V)
6. **Robot Chassis** - Platform for mounting
7. **2x Wheels** - For motors
8. **1x Caster Wheel** - Front/rear support
9. **Jumper Wires** - Connections
10. **Breadboard** (optional) - For neat connections

## Wiring Connections

### HC-SR04 to Arduino:
- **VCC** → Arduino 5V
- **GND** → Arduino GND
- **TRIG** → Arduino A0
- **ECHO** → Arduino A1

### L298N Motor Driver to Arduino:
- **ENA** → Arduino Pin 5 (Right motor speed)
- **IN1** → Arduino Pin 6 (Right motor direction)
- **IN2** → Arduino Pin 7 (Right motor direction)
- **ENB** → Arduino Pin 10 (Left motor speed)
- **IN3** → Arduino Pin 8 (Left motor direction)
- **IN4** → Arduino Pin 9 (Left motor direction)

### L298N Motor Driver Power:
- **12V** → Battery Positive (+)
- **GND** → Battery Negative (-) and Arduino GND
- **5V Output** → Arduino VIN (powers Arduino from motor driver)

### Motors to L298N:
- **Motor A (Right)** → OUT1, OUT2
- **Motor B (Left)** → OUT3, OUT4

## Power Supply

**Option 1:** 2x AA Batteries (3V) - **NOT ENOUGH!**
**Option 2:** 4x AA Batteries (6V) - Minimum required
**Option 3:** 6x AA Batteries (9V) - Recommended
**Option 4:** 9V Battery - Works but drains quickly
**Option 5:** 7.4V LiPo Battery - Best performance

⚠ **Important:** L298N needs 6V-12V for motors. The 5V output powers Arduino.

## Robot Behavior

### Normal Operation:
1. **Clear Path** → Moves forward at constant speed
2. **Obstacle Far** (>20cm) → Continues forward
3. **Obstacle Near** (<20cm) → Stops and avoids

### Obstacle Avoidance Sequence:
1. **STOP** - Halt immediately
2. **BACKUP** - Reverse for 500ms
3. **SCAN** - Check left and right distances
4. **TURN** - Rotate toward clearer direction
5. **RESUME** - Continue forward

## Parameters You Can Adjust

```cpp
const int SAFE_DISTANCE = 20;  // Obstacle detection distance (cm)
const int MOTOR_SPEED = 150;   // Speed (0-255), adjust for your motors
const int TURN_TIME = 500;     // How long to turn (ms)
```

## Features

✓ **Autonomous Navigation** - Moves by itself without control
✓ **Obstacle Detection** - Avoids walls and objects
✓ **Smart Decision Making** - Chooses best path
✓ **Real-time Monitoring** - Serial Monitor shows status
✓ **Adjustable Parameters** - Customize speed and distance
✓ **Battery Powered** - Portable and wireless

## Applications

- **Educational Robotics** - Learn programming and electronics
- **Maze Solving** - Navigate through obstacles
- **Home Automation** - Vacuum cleaning robots
- **Warehouse Robots** - Automated material handling
- **Surveillance** - Autonomous patrol robots
- **STEM Projects** - School competitions
- **Hobby Projects** - Fun weekend builds

## Upgrades & Enhancements

### Easy Upgrades:
1. **Servo Motor** - Add rotating sensor for 180° scanning
2. **LED Indicators** - Show robot status (forward/turning/stopped)
3. **Buzzer** - Sound alerts when obstacle detected
4. **Line Following** - Add IR sensors on bottom

### Advanced Upgrades:
1. **Bluetooth Control** - Switch between manual and auto mode
2. **Speed Control** - Adjust speed based on distance
3. **Multiple Sensors** - Side sensors for better navigation
4. **LCD Display** - Show distance and mode
5. **Remote Control** - Add RC receiver for manual override
6. **Camera Module** - Vision-based navigation

## Troubleshooting

**Robot doesn't move:**
- Check battery voltage (needs 6V+)
- Verify motor connections to L298N
- Check ENA/ENB jumpers on L298N
- Test motors directly with battery

**Moves only in one direction:**
- Swap motor wires (IN1↔IN2 or IN3↔IN4)
- Check if one motor is broken
- Verify all pins connected correctly

**Doesn't detect obstacles:**
- Check HC-SR04 connections
- Test sensor separately with distance code
- Ensure sensor faces forward
- Check TRIG/ECHO not swapped

**Turns wrong direction:**
- Swap motor A and B connections
- Or change motor rotation logic in code
- Check motor polarity

**Motors too slow:**
- Increase MOTOR_SPEED (max 255)
- Check battery voltage (low battery = slow motors)
- Remove ENA/ENB jumpers and use PWM

**Robot unstable/tips over:**
- Add weight at bottom (batteries low)
- Check caster wheel moves freely
- Ensure chassis is balanced

## Safety Notes

⚠ Use proper polarity - Red (+) to positive, Black (-) to negative
⚠ Never connect motor power directly to Arduino
⚠ L298N gets hot - ensure ventilation
⚠ Test on floor, not on tables (can fall)
⚠ Start with low speed (100-150) then increase

## Building Tips

1. **Mount sensors firmly** - Loose sensors give bad readings
2. **Organize wires** - Use zip ties or tape
3. **Test each part** - Test motors, sensor separately first
4. **Balance weight** - Heavy components at bottom
5. **Secure battery** - Tape or velcro to chassis
6. **Leave space** - Room for future upgrades

## Performance Specs

- **Operating Voltage:** 6V-9V
- **Detection Range:** 2cm-400cm
- **Safe Distance:** 20cm (adjustable)
- **Motor Speed:** 0-255 (PWM)
- **Turn Time:** 500ms (adjustable)
- **Operating Time:** 30-60 mins (depends on battery)
- **Weight:** ~300-500g (with batteries)

## Next Steps After Building

1. **Test in open space first** - Ensure basic movement works
2. **Create obstacle course** - Set up boxes and test avoidance
3. **Adjust parameters** - Fine-tune distance and speed
4. **Add features** - LED, buzzer, LCD display
5. **Enter competitions** - Many robotics competitions available
6. **Share your project** - Post videos and inspire others!