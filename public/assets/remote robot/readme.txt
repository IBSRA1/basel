# Bluetooth Controlled Robot Car

## Project Description

This is a wireless remote-controlled robot car operated via Bluetooth from your smartphone. Unlike autonomous robots, this one gives you full manual control - drive it like an RC car using a mobile app! Send simple commands (F, B, L, R, S) to move forward, backward, turn left/right, or stop. You can also adjust the speed on-the-fly from your phone.

Perfect for learning robotics, remote control systems, and wireless communication. Great for racing, obstacle courses, or just having fun!

## Hardware Required

1. **Arduino Uno** - Main controller
2. **L298N Motor Driver Module** (Red board) - Powers and controls motors
3. **2x DC Gear Motors** (with wheels) - Drives the robot
4. **HC-05 Bluetooth Module** - Wireless communication
5. **Battery Pack** (4-6 AA batteries or 7.4V LiPo) - Power supply
6. **Robot Chassis** - Frame with wheels
7. **Caster Wheel** - Support wheel
8. **Breadboard** - Optional for neat wiring
9. **Jumper Wires** - Connections

## Wiring Connections

### HC-05 Bluetooth to Arduino:
- **VCC** → Arduino 5V
- **GND** → Arduino GND
- **TXD** → Arduino Pin 2 (RX)
- **RXD** → Arduino Pin 3 (TX)

### L298N Motor Driver to Arduino:
**Right Motor (Motor A):**
- **ENA** → Pin 5 (Speed control - PWM)
- **IN1** → Pin 6 (Direction)
- **IN2** → Pin 7 (Direction)

**Left Motor (Motor B):**
- **ENB** → Pin 10 (Speed control - PWM)
- **IN3** → Pin 8 (Direction)
- **IN4** → Pin 9 (Direction)

### Power Connections:
- **Battery (+)** → L298N 12V terminal
- **Battery (-)** → L298N GND
- **L298N GND** → Arduino GND (Common ground)
- **L298N 5V Output** → Arduino VIN (Powers Arduino)

### Motors to L298N:
- **Right Motor** → OUT1, OUT2
- **Left Motor** → OUT3, OUT4

## Mobile App Commands

| Command | Action | Description |
|---------|--------|-------------|
| **F** | Forward | Both motors forward |
| **B** | Backward | Both motors reverse |
| **L** | Left | Right forward, Left reverse |
| **R** | Right | Left forward, Right reverse |
| **S** | Stop | All motors off |
| **0-9** | Speed | 0=slowest, 9=fastest |

## Mobile Apps to Use

### Android Apps:
1. **"Arduino Bluetooth RC Car"** (Best for this project)
2. **"Bluetooth RC Controller"**
3. **"Serial Bluetooth Terminal"**
4. **"Arduino Car Controller"**

### App Setup:
1. Install app from Google Play Store
2. Turn on Bluetooth on phone
3. Pair with HC-05 (PIN: 1234)
4. Open app and connect to HC-05
5. Use on-screen buttons to control robot

## How It Works

1. **Send Command** - Press button on mobile app
2. **Bluetooth Transmission** - Command sent wirelessly to HC-05
3. **Arduino Receives** - Arduino reads command via serial
4. **Decision Making** - Code determines which motors to activate
5. **Motor Control** - L298N drives motors based on command
6. **Robot Moves** - Physical movement happens

## Features

✓ **Wireless Control** - Drive from up to 10 meters away
✓ **Variable Speed** - 10 speed levels (0-9)
✓ **Real-time Response** - Instant command execution
✓ **Simple Commands** - Easy single-character controls
✓ **Bidirectional Movement** - Forward, backward, left, right
✓ **Battery Powered** - Completely portable
✓ **Serial Feedback** - Monitor commands on Serial Monitor

## Applications

- **RC Car Racing** - Race with friends
- **Obstacle Courses** - Navigate through challenges
- **Delivery Robot** - Carry small items
- **Surveillance** - Remote exploration
- **Educational Projects** - Learn robotics and programming
- **STEM Competitions** - Robot challenges
- **Entertainment** - Just for fun!

## Control Tips

### Basic Driving:
- **F** = Move forward (hold for continuous movement)
- **S** = Stop (release all controls)
- **L/R** = Sharp turn (spins in place)

### Smooth Driving:
- Adjust speed before moving (send 5 for medium speed)
- Use short button presses for precise control
- Combine commands: F → R → F for curved path

### Speed Recommendations:
- **Indoor/Carpet**: Start at speed 4-5
- **Outdoor/Smooth**: Can use speed 7-9
- **Learning**: Start at speed 3-4
- **Racing**: Max speed 9

## Troubleshooting

**Robot doesn't respond to commands:**
- Check HC-05 LED is blinking/solid (connected)
- Verify Bluetooth paired and connected in app
- Check battery charge
- Test with Serial Monitor first

**Motors don't move:**
- Check battery voltage (needs 6V minimum)
- Verify L298N power connections
- Ensure ENA/ENB jumpers are in place (or remove and control via PWM)
- Test motors directly with wires

**Moves in wrong direction:**
- Swap motor wires on L298N (swap OUT1↔OUT2 or OUT3↔OUT4)
- Or modify code: change HIGH/LOW in movement functions

**Only turns, doesn't go straight:**
- Check both motors getting same speed
- Verify both motor connections
- Motors may have different speeds - adjust in code

**Bluetooth won't connect:**
- Pair device first in phone Bluetooth settings
- Default PIN: 1234
- Reset HC-05 by power cycling
- Check if HC-05 is in data mode (not AT mode)

**Speed control doesn't work:**
- Remove jumpers from ENA/ENB on L298N
- Connect ENA to Pin 5, ENB to Pin 10
- Use PWM pins for speed control

## Upgrades & Enhancements

### Easy Additions:
1. **LED Headlights** - Add LEDs on front
2. **Buzzer** - Horn/beep sounds
3. **Reverse Camera** - View from robot perspective
4. **Speed Display** - LCD showing current speed

### Advanced Features:
1. **Sensor Integration** - Add ultrasonic for auto-braking
2. **Camera Module** - Live video feed to phone
3. **Servo for Camera** - Pan/tilt camera control
4. **RGB LEDs** - Underglow lighting effects
5. **Accelerometer Control** - Tilt phone to steer
6. **Voice Commands** - Control with voice

### Performance Upgrades:
1. **Better Motors** - Higher RPM motors
2. **LiPo Battery** - More power, longer runtime
3. **Larger Wheels** - All-terrain capability
4. **Metal Chassis** - Durability
5. **Suspension** - Better handling

## Safety & Best Practices

⚠ **Always start at low speed** - Test before going fast
⚠ **Keep away from water** - Electronics are not waterproof
⚠ **Don't overload** - Robot has weight limit
⚠ **Watch battery polarity** - Red=positive, Black=negative
⚠ **Test on safe surface** - Not on tables or high places
⚠ **Supervise children** - Moving parts can pinch

## Power Specifications

**Battery Options:**
- 4x AA (6V) - Minimum, works but slow
- 6x AA (9V) - Recommended for good performance
- 7.4V LiPo - Best performance, rechargeable
- 9V Battery - Works but drains quickly

**Current Draw:**
- Idle: ~100mA
- Moving: ~500mA-1A
- Maximum: ~2A (both motors full load)

**Runtime Estimate:**
- AA batteries (2000mAh): 1-2 hours
- LiPo (1500mAh): 1.5-3 hours

## Building Tips

1. **Test components separately** - Motors, Bluetooth, sensors
2. **Secure all connections** - Use zip ties or hot glue
3. **Balance weight** - Heavy items (battery) at bottom/center
4. **Wire management** - Keep wires neat and secure
5. **Leave room for upgrades** - Don't pack everything tight
6. **Label wires** - Makes troubleshooting easier

## Performance Specs

- **Control Range:** 10 meters (Bluetooth Class 2)
- **Response Time:** <100ms
- **Battery Life:** 1-3 hours (depends on battery)
- **Max Speed:** Depends on motors/wheels
- **Weight Capacity:** ~200-500g payload
- **Operating Voltage:** 6V-9V
- **Speed Levels:** 10 (0-9)

## Code Customization

### Change Speed Ranges:
```cpp
case '5':
  motorSpeed = 150;  // Change this value (0-255)
  break;
```

### Add New Commands:
```cpp
case 'H':  // Horn
  tone(buzzerPin, 1000, 200);
  break;
```

### Adjust Motor Balance:
```cpp
// If robot turns slightly, adjust one motor:
analogWrite(ENB, motorSpeed - 10);  // Reduce left motor
```

## Next Steps

1. **Test basic movement** - Verify all directions work
2. **Calibrate speed** - Find comfortable driving speed
3. **Practice control** - Learn to drive smoothly
4. **Create challenges** - Set up obstacle course
5. **Add features** - LEDs, horn, sensors
6. **Compete** - Challenge friends to races
7. **Share** - Post your project online!