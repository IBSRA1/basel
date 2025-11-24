export const projectsData = {
  'lcd-advertisement': {
    id: 'lcd-advertisement',
    category: 'Electronics',
    title: {
      en: 'Bluetooth LCD Advertisement Display',
      ar: 'شاشة إعلانات LCD بلوتوث'
    },
    description: {
      en: 'A wireless display system that allows you to send custom messages to an LCD screen using your smartphone via Bluetooth. Perfect for digital signage, advertisements, or information displays in shops, restaurants, or offices.',
      ar: 'نظام عرض لاسلكي يتيح لك إرسال رسائل مخصصة إلى شاشة LCD باستخدام هاتفك الذكي عبر البلوتوث. مثالي للوحات رقمية أو إعلانات أو عروض معلومات في المحلات أو المطاعم أو المكاتب.'
    },
    shortDescription: {
      en: 'Wireless display system using HC-05 Bluetooth module and 16x2 I2C LCD. Send messages remotely from mobile app to display custom advertisements.',
      ar: 'نظام عرض لاسلكي باستخدام وحدة HC-05 بلوتوث وشاشة I2C LCD 16x2. إرسال الرسائل عن بُعد من التطبيق المحمول لعرض الإعلانات المخصصة.'
    },
    features: {
      en: [
        'Wireless message transmission via Bluetooth',
        '16x2 I2C LCD display for clear text',
        'Mobile app integration for easy control',
        'Real-time message updates',
        'Customizable display settings',
        'Low power consumption'
      ],
      ar: [
        'نقل الرسائل لاسلكياً عبر البلوتوث',
        'شاشة LCD 16x2 I2C لعرض نص واضح',
        'تكامل مع التطبيق المحمول للتحكم السهل',
        'تحديثات الرسائل في الوقت الفعلي',
        'إعدادات عرض قابلة للتخصيص',
        'استهلاك طاقة منخفض'
      ]
    },
    technologies: ['Arduino Uno', 'HC-05 Bluetooth', 'I2C LCD', 'Mobile App'],
    image: '/assets/advertisment lcd/122.jpeg',
    circuitDiagram: '/assets/advertisment lcd/122.jpeg',
    functionality: `
    1. The HC-05 Bluetooth module receives commands from a mobile application.
    2. The Arduino Uno processes the incoming Bluetooth data.
    3. Messages are parsed and formatted for display on the 16x2 LCD screen.
    4. The I2C LCD displays the custom text in real-time.
    5. Users can update messages instantly from their smartphone.
    6. The system supports multiple message formats and scrolling text.
    7. Perfect for dynamic advertising and information displays.
    `
  },
  'distance-alarm': {
    id: 'distance-alarm',
    category: 'Electronics',
    title: {
      en: 'Ultrasonic Distance Alert System',
      ar: 'نظام تنبيه المسافة بالموجات فوق الصوتية'
    },
    description: {
      en: 'An intelligent proximity warning system that uses ultrasonic sensors to detect objects and provides multi-level audio alerts. Perfect for parking assistance, obstacle detection, and security applications.',
      ar: 'نظام تحذير القرب الذكي الذي يستخدم أجهزة استشعار الموجات فوق الصوتية للكشف عن الأشياء ويوفر تنبيهات صوتية متعددة المستويات. مثالي لمساعدة الركن وكشف العوائق وتطبيقات الأمان.'
    },
    shortDescription: {
      en: 'Proximity warning system with multi-level audio alerts. Perfect for parking assistance, obstacle detection, and security applications.',
      ar: 'نظام تحذير القرب مع تنبيهات صوتية متعددة المستويات. مثالي لمساعدة الركن، كشف العوائق، وتطبيقات الأمان.'
    },
    features: {
      en: [
        'Multi-zone distance detection (10cm-100cm)',
        'Variable audio alert intensity',
        'Real-time distance monitoring',
        'Adjustable sensitivity settings',
        'Serial monitor feedback',
        'Low power consumption'
      ],
      ar: [
        'كشف المسافة متعدد المناطق (10سم-100سم)',
        'شدة تنبيه صوتي متغيرة',
        'مراقبة المسافة في الوقت الفعلي',
        'إعدادات حساسية قابلة للتعديل',
        'تغذية راجعة عبر المراقب التسلسلي',
        'استهلاك طاقة منخفض'
      ]
    },
    technologies: ['HC-SR04 Sensor', 'Arduino Uno', 'Buzzer', 'Multi-zone Alert'],
    image: '/assets/distance alarm snesor/WhatsApp Image 2025-10-27 at 09.15.46.jpeg',
    circuitDiagram: '/assets/distance alarm snesor/WhatsApp Image 2025-10-27 at 09.15.46.jpeg',
    functionality: `
    1. The HC-SR04 ultrasonic sensor continuously measures distance to nearby objects.
    2. The Arduino processes distance data and categorizes it into zones (Very Close, Close, Medium, Far).
    3. Based on the detected distance, the buzzer produces different alert patterns.
    4. Critical distances trigger continuous beeping, while safer distances have slower intervals.
    5. Real-time distance readings are displayed on the serial monitor.
    6. The system provides instant feedback for parking assistance and obstacle detection.
    7. Adjustable thresholds allow customization for different applications.
    `
  },
  'mobile-led': {
    id: 'mobile-led',
    category: 'Mobile Application',
    title: {
      en: 'Mobile App Controlled LED',
      ar: 'LED متحكم بالتطبيق المحمول'
    },
    description: {
      en: 'IoT project enabling remote LED control via smartphone Bluetooth. Features multiple blink patterns and real-time feedback.',
      ar: 'مشروع إنترنت الأشياء يتيح التحكم في LED عن بُعد عبر بلوتوث الهاتف الذكي. يتضمن أنماط وميض متعددة وتغذية راجعة فورية.'
    },
    shortDescription: {
      en: 'IoT project enabling remote LED control via smartphone Bluetooth. Features multiple blink patterns and real-time feedback.',
      ar: 'مشروع إنترنت الأشياء يتيح التحكم في LED عن بُعد عبر بلوتوث الهاتف الذكي. يتضمن أنماط وميض متعددة وتغذية راجعة فورية.'
    },
    features: {
      en: [
        'Remote control via Bluetooth',
        'Multiple blink patterns',
        'Real-time feedback',
        'Simple mobile app interface',
        'Low power consumption',
        'Easy to expand'
      ],
      ar: [
        'التحكم عن بُعد عبر البلوتوث',
        'أنماط وميض متعددة',
        'تغذية راجعة فورية',
        'واجهة تطبيق محمول بسيطة',
        'استهلاك طاقة منخفض',
        'سهل التوسع'
      ]
    },
    technologies: ['Bluetooth', 'Mobile App', 'IoT', 'Remote Control'],
    image: '/assets/mboile app and electronics/WhatsApp Image 2025-10-27 at 09.27.41.jpeg',
    circuitDiagram: '/assets/mboile app and electronics/WhatsApp Image 2025-10-27 at 09.27.41.jpeg',
    functionality: `
    1. The mobile application sends commands via Bluetooth to the Arduino.
    2. The Arduino receives and processes the command through the Bluetooth module.
    3. Based on the command received, the LED performs different actions (ON, OFF, or various blink patterns).
    4. Users can select from multiple blink modes: normal blink, fast blink, or slow blink.
    5. Serial monitor provides real-time feedback on received commands.
    6. The system responds instantly to mobile app inputs.
    7. Perfect for learning IoT basics and remote control applications.
    `
  },
  'obstacle-avoider': {
    id: 'obstacle-avoider',
    category: 'Robotics',
    title: {
      en: 'Autonomous Obstacle Avoiding Robot',
      ar: 'روبوت تجنب العوائق المستقل'
    },
    description: {
      en: 'Self-navigating robot car with ultrasonic sensor navigation. Automatically detects and avoids obstacles while finding the clearest path forward.',
      ar: 'سيارة روبوت ذاتية التنقل مع ملاحة مستشعر الموجات فوق الصوتية. تكتشف وتتجنب العوائق تلقائياً بينما تجد أسهل مسار للأمام.'
    },
    shortDescription: {
      en: 'Self-navigating robot car with ultrasonic sensor navigation. Automatically detects and avoids obstacles while finding the clearest path forward.',
      ar: 'سيارة روبوت ذاتية التنقل مع ملاحة مستشعر الموجات فوق الصوتية. تكتشف وتتجنب العوائق تلقائياً بينما تجد أسهل مسار للأمام.'
    },
    features: {
      en: [
        'Autonomous navigation',
        'Obstacle detection and avoidance',
        'Smart pathfinding',
        'Real-time monitoring',
        'Adjustable parameters',
        'Battery powered'
      ],
      ar: [
        'ملاحة مستقلة',
        'كشف وتجنب العوائق',
        'إيجاد المسار الذكي',
        'مراقبة في الوقت الفعلي',
        'معاملات قابلة للتعديل',
        'مدعوم بالبطارية'
      ]
    },
    technologies: ['L298N Motor Driver', 'DC Motors', 'Ultrasonic Sensor', 'Autonomous Navigation'],
    image: '/assets/obstcale avoider robot/WhatsApp Image 2025-10-27 at 09.37.39.jpeg',
    circuitDiagram: '/assets/obstcale avoider robot/WhatsApp Image 2025-10-27 at 09.37.39.jpeg',
    functionality: {
      en: `1. The ultrasonic sensor continuously scans the path ahead for obstacles.
2. Distance measurements are processed by the Arduino microcontroller.
3. When an obstacle is detected within the safe distance threshold, the robot stops.
4. The robot reverses briefly to create maneuvering space.
5. It then scans left and right to determine the clearest path.
6. Based on the scan results, it turns toward the direction with more space.
7. The robot resumes forward movement, continuously adapting to its environment.`,
      ar: `1. يقوم مستشعر الموجات فوق الصوتية بمسح المسار أمامه بحثاً عن العوائق بشكل مستمر.
2. يتم معالجة قياسات المسافة بواسطة متحكم أردوينو الدقيق.
3. عند اكتشاف عائق ضمن حد المسافة الآمن، يتوقف الجهاز.
4. ينعكس الجهاز للخلف بشكل قصير لإنشاء مساحة للمناورة.
5. ثم يقوم بمسح اليسار واليمين لتحديد أوضح المسارات.
6. بناءً على نتائج المسح، ينعطف نحو الاتجاه الذي به مساحة أكبر.
7. يستأنف الجهاز الحركة للأمام، ويستمر في التكيف مع بيئته.`
    }
  },
  'remote-robot': {
    id: 'remote-robot',
    category: 'Robotics',
    title: {
      en: 'Bluetooth Controlled Robot Car',
      ar: 'سيارة روبوت متحكم بها بالبلوتوث'
    },
    description: {
      en: 'Wireless RC robot with smartphone control. Features variable speed control, real-time response, and 10-meter range operation.',
      ar: 'روبوت RC لاسلكي مع تحكم بالهاتف الذكي. يتضمن تحكم في السرعة المتغيرة واستجابة فورية وعمل بمدى 10 أمتار.'
    },
    shortDescription: {
      en: 'Wireless RC robot with smartphone control. Features variable speed control, real-time response, and 10-meter range operation.',
      ar: 'روبوت RC لاسلكي مع تحكم بالهاتف الذكي. يتضمن تحكم في السرعة المتغيرة واستجابة فورية وعمل بمدى 10 أمتار.'
    },
    features: {
      en: [
        'Wireless control via Bluetooth',
        'Variable speed control (0-9)',
        'Real-time response',
        'Bidirectional movement',
        '10-meter range',
        'Battery powered'
      ],
      ar: [
        'التحكم اللاسلكي عبر البلوتوث',
        'تحكم في السرعة المتغيرة (0-9)',
        'استجابة فورية',
        'حركة ثنائية الاتجاه',
        'مدى 10 أمتار',
        'مدعوم بالبطارية'
      ]
    },
    technologies: ['Bluetooth Control', 'RC Car', 'Variable Speed', 'Mobile App'],
    image: '/assets/remote robot/WhatsApp Image 2025-10-27 at 09.41.10.jpeg',
    circuitDiagram: '/assets/remote robot/WhatsApp Image 2025-10-27 at 09.41.10.jpeg',
    functionality: `
    1. The mobile app sends directional commands (Forward, Backward, Left, Right, Stop) via Bluetooth.
    2. The Bluetooth module receives commands and transmits them to the Arduino.
    3. The Arduino interprets commands and controls the L298N motor driver accordingly.
    4. DC motors respond instantly to create the desired movement.
    5. Users can adjust speed levels from 0-9 using the mobile app.
    6. Speed settings are mapped to PWM values for smooth control.
    7. The robot operates within a 10-meter Bluetooth range with real-time responsiveness.
    `
  },
  'traffic-light': {
    id: 'traffic-light',
    category: 'Electronics',
    title: {
      en: 'Traffic Light Control System',
      ar: 'نظام تحكم إشارات المرور'
    },
    description: {
      en: 'Automated traffic signal simulation with realistic timing sequences. Educational project demonstrating timing control and LED management.',
      ar: 'محاكاة إشارات المرور الآلية مع تسلسلات توقيت واقعية. مشروع تعليمي يوضح تحكم التوقيت وإدارة LED.'
    },
    shortDescription: {
      en: 'Automated traffic signal simulation with realistic timing sequences. Educational project demonstrating timing control and LED management.',
      ar: 'محاكاة إشارات المرور الآلية مع تسلسلات توقيت واقعية. مشروع تعليمي يوضح تحكم التوقيت وإدارة LED.'
    },
    features: {
      en: [
        'Automatic cycling sequence',
        'Realistic timing (Red-Green-Yellow)',
        'Serial monitor feedback',
        'Easy customization',
        'Educational value',
        'Low power consumption'
      ],
      ar: [
        'تسلسل دوري تلقائي',
        'توقيت واقعي (أحمر-أخضر-أصفر)',
        'تغذ��ة راجعة عبر المراقب التسلسلي',
        'تخصيص سهل',
        'قيمة تعليمية',
        'استهلاك طاقة منخفض'
      ]
    },
    technologies: ['LED Control', 'Timing Logic', 'Sequential Control', 'Educational'],
    image: '/assets/traffic light/WhatsApp Image 2025-10-27 at 09.12.14.jpeg',
    circuitDiagram: '/assets/traffic light/WhatsApp Image 2025-10-27 at 09.29.54.jpeg',
    functionality: `
    1. The system initializes with all three LEDs (Red, Yellow, Green) in the off state.
    2. The traffic light sequence begins with the Red LED turning on for 5 seconds (STOP).
    3. After the red phase, the Green LED activates for 5 seconds (GO).
    4. The Yellow LED then illuminates for 2 seconds (CAUTION) before cycling back to red.
    5. Serial monitor displays the current light state for debugging and monitoring.
    6. The cycle repeats continuously, simulating real traffic light behavior.
    7. Timing intervals can be easily adjusted for different traffic flow scenarios.
    `
  },
  'advanced-obstacle-avoider': {
    id: 'advanced-obstacle-avoider',
    category: 'Electronics',
    title: {
      en: 'Distance Measurement Device',
      ar: 'جهاز قياس المساف��'
    },
    description: {
      en: 'Advanced distance measurement system using servo-mounted ultrasonic sensors for 360-degree environmental scanning. Provides precise distance mapping in multiple directions with real-time data processing for surveying, mapping, and industrial applications.',
      ar: 'نظام قياس المسافة المتقدم باستخدام مستشعرات الموجات فوق الصوتية المثبتة على سيرفو لمسح بيئي بزاوية 360 درجة. يوفر رسم خرائط المسافة بدقة في اتجاهات متعددة مع معالجة البيانات في الوقت الفعلي للمسح والتخطيط والتطبيقات الصناعية.'
    },
    shortDescription: {
      en: 'Advanced 360-degree distance mapping system with servo-based ultrasonic scanning. Real-time environmental analysis for surveying, obstacle detection, and industrial measurement applications.',
      ar: 'نظام رسم خرائط المسافة بزاوية 360 درجة مع المسح بالموجات فوق الصوتية المدفوع بالسيرفو. تحليل البيئة في الوقت الفعلي لتطبيقات المسح وكشف العوائق والقياس الصناعي.'
    },
    features: {
      en: [
        '360-degree distance scanning',
        'Multi-angle measurement points',
        'Servo-based sensor positioning',
        'Real-time spatial mapping',
        'High precision distance data',
        'Environmental obstacle detection'
      ],
      ar: [
        'مسح المسافة بزاوية 360 درجة',
        'نقاط القياس متعددة الزوايا',
        'تحديد موضع المستشعر بالسيرفو',
        'رسم الخرائط المكانية في الوقت الفعلي',
        'بيانات المسافة عالية الدقة',
        'كشف العوائق البيئية'
      ]
    },
    technologies: ['HC-SR04 Sensor', 'Servo Motor', 'Arduino Uno', '360-Degree Mapping'],
    image: '/assets/advanced obstcale avoider/12.jpeg',
    circuitDiagram: '/assets/advanced obstcale avoider/12.jpeg',
    functionality: `
    1. The system uses an ultrasonic sensor mounted on a servo motor for directional scanning.
    2. The servo rotates through predefined angles (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) for complete coverage.
    3. At each angle, the HC-SR04 sensor measures distance to the nearest object.
    4. The Arduino processes distance data from all directions to create a spatial map.
    5. Data is collected and stored for each scanning direction, providing 360-degree environmental awareness.
    6. Real-time distance readings are available for obstacle detection and mapping applications.
    7. The system enables comprehensive environmental analysis for surveying, navigation, and industrial applications.
    `
  },
  'calculator': {
    id: 'calculator',
    category: 'Mobile Application',
    title: {
      en: 'Basic Calculator Mobile Application',
      ar: 'تطبيق آلة حاسبة أساسي للموبايل'
    },
    description: {
      en: 'A simple mobile calculator application designed for basic arithmetic operations. Users can input two numbers and perform addition, subtraction, multiplication, or division. Perfect for quick calculations on Android devices.',
      ar: 'تطبيق آلة حاسبة بسيط مصمم للعمليات الحسابية الأساسية. يمكن للمستخدمين إدخال رقمين وإجراء الجمع والطرح والضرب أو القسمة. مثالي للحسابات السريعة على أجهزة Android.'
    },
    shortDescription: {
      en: 'Simple mobile calculator for basic arithmetic operations. Supports addition, subtraction, multiplication, and division with a clean, user-friendly interface.',
      ar: 'آلة حاسبة محمولة بسيطة للعمليات الحسابية الأساسية. تدعم الجمع والطرح والضرب والقسمة بواجهة نظيفة وسهلة الاستخدام.'
    },
    features: {
      en: [
        'Two-number input system',
        'Basic arithmetic operations (+, -, *, /)',
        'Clear operator buttons',
        'Simple user interface',
        'Mobile-optimized design',
        'Real-time calculation'
      ],
      ar: [
        'نظام إدخال رقمين',
        'عمليات حسابية أساسية (+, -, *, /)',
        'أزرار مشغل واضحة',
        'واجهة مستخدم بسيطة',
        'تصميم محسّن للموبايل',
        'حساب فوري'
      ]
    },
    technologies: ['Mobile App', 'Android', 'MIT App Inventor', 'UI/UX'],
    image: '/assets/calculator/WhatsApp Image 2025-11-06 at 14.39.30.jpeg',
    circuitDiagram: '/assets/calculator/WhatsApp Image 2025-11-06 at 14.39.30.jpeg',
    functionality: `
    1. Users open the Calculator application on their Android smartphone.
    2. Two input fields allow users to enter the first and second numbers.
    3. Four operator buttons (+, -, *, /) are available for arithmetic operations.
    4. When an operator button is pressed, the app retrieves values from input fields.
    5. The selected arithmetic operation is performed on the two numbers.
    6. The result is displayed immediately on the screen.
    7. The interface provides instant feedback for quick calculations.
    `
  },
  'math-game': {
    id: 'math-game',
    category: 'Desktop Games',
    title: {
      en: 'Math Learning Game',
      ar: 'لعبة تعلم الرياضيات'
    },
    description: {
      en: 'An interactive Scratch game designed to make learning basic math interesting and enjoyable. Players answer math questions, earn points for correct answers, and learn arithmetic skills in a fun, engaging environment.',
      ar: 'لعبة Scratch تفاعلية مصممة لجعل تعلم الرياضيات الأساسية ممتعاً ومثيراً للاهتمام. يجيب اللاعبون على أسئلة الرياضيات ويكسبون نقاطاً للإجابات الصحيحة ويتعلمون مهارات الحساب في بيئة ممتعة وجذابة.'
    },
    shortDescription: {
      en: 'Interactive Scratch game that makes learning math fun. Answer questions correctly to earn points and improve arithmetic skills through engaging gameplay.',
      ar: 'لعبة Scratch تفاعلية تجعل تعلم الرياضيات ممتعاً. أجب على الأسئلة بشكل صحيح لتحصل على نقاط وتحسّن مهاراتك الحسابية من خلال لعب جذاب.'
    },
    features: {
      en: [
        'Interactive math challenges',
        'Score tracking system',
        'Sound feedback for correct answers',
        'Game over condition for learning',
        'Space-themed environment',
        'Broadcast message system'
      ],
      ar: [
        'تحديات رياضية تفاعلية',
        'نظام تتبع النقاط',
        'تغذية راجعة صوتية للإجابات الصحيحة',
        'شرط انتهاء اللعبة للتعلم',
        'بيئة ذات طابع فضائي',
        'نظام رسائل البث'
      ]
    },
    technologies: ['Scratch', 'Game Development', 'Educational Gaming', 'Interactive Learning'],
    image: '/assets/math-game/Screenshot 2025-11-06 140140.png',
    circuitDiagram: '/assets/math-game/Screenshot 2025-11-06 140140.png',
    functionality: `
    1. Players click the green flag to start the math learning adventure.
    2. Math problems appear in a space-themed setting.
    3. Players type their numerical answer into the input box.
    4. Correct answers increase the player's score and play a rewarding sound.
    5. Incorrect answers trigger a "game over" message, providing learning feedback.
    6. The game uses broadcast messages to control game flow and display end-game screens.
    7. The iterative questioning method helps reinforce arithmetic skills through practice.
    `
  },
  'smart-notebook': {
    id: 'smart-notebook',
    category: 'Mobile Application',
    title: {
      en: 'Smart Notebook Mobile Application',
      ar: 'تطبيق دفتر ذكي للموبايل'
    },
    description: {
      en: 'A custom Android app providing a digital canvas for free-form drawing and note-taking with multiple color options. Focuses on simplicity and touch-based interaction for creative expression.',
      ar: 'تطبيق Android مخصص يوفر لوحة رقمية للرسم الحر وكتابة الملاحظات مع خيارات ألوان متعددة. يركز على البساطة والتفاعل القائم على اللمس للتعبير الإبداعي.'
    },
    shortDescription: {
      en: 'Digital drawing and note-taking app with multiple color options. Simple touch-based interface for creative expression and visual notes.',
      ar: 'تطبيق رسم رقمي وكتابة ملاحظات مع خيارات ألوان متعددة. واجهة لمس بسيطة للتعبير الإبداعي والملاحظات المرئية.'
    },
    features: {
      en: [
        'Free-form drawing with finger input',
        'Multiple color palette (black, blue, magenta, yellow, green, pink)',
        'Touch-based interaction',
        'Simple user interface',
        'Mobile-first design',
        'Creative expression tool'
      ],
      ar: [
        'رسم حر بإدخال الإصبع',
        'لوحة ألوان متعددة (أسود، أزرق، أرجواني، أصفر، أخضر، وردي)',
        'تفاعل قائم على اللمس',
        'واجهة مستخدم بسيطة',
        'تصميم محسّن للموبايل',
        'أداة للتعبير الإبداعي'
      ]
    },
    technologies: ['Mobile App', 'Android', 'Canvas Drawing', 'Touch Interface', 'UI/UX'],
    image: '/assets/smart-notebook/WhatsApp Image 2025-11-06 at 14.30.10.jpeg',
    circuitDiagram: '/assets/smart-notebook/WhatsApp Image 2025-11-06 at 14.30.10.jpeg',
    functionality: `
    1. Users open the Smart Notebook app on their Android device.
    2. A white canvas is displayed for free-form drawing.
    3. Users draw on the canvas using their finger as input.
    4. Multiple colored squares at the top allow users to change drawing color.
    5. The app responds to TouchDown, Dragged, and TouchUp events for line drawing.
    6. The PaintColor changes based on the selected color from the palette.
    7. The simple interface enables quick visual notes and creative doodling.
    `
  },
  'zombie-game': {
    id: 'zombie-game',
    category: 'Desktop Games',
    title: {
      en: 'Zombie Killer Game',
      ar: 'لعبة قاتل الزومبي'
    },
    description: {
      en: 'An action-packed Scratch game where players control a flashlight to shoot randomly spawning zombies. Survive, achieve high scores, and avoid being touched by zombies within a time limit. Perfect for hand-eye coordination and quick reaction training.',
      ar: 'لعبة Scratch مليئة بالإثارة حيث يتحكم اللاعبون في مصباح يدوي لإطلاق النار على الزومبي الذي يظهر بشكل عشوائي. ابق على قيد الحياة، احقق درجات عالية، وتجنب لمس الزومبي في غضون حد زمني. مثالية لتدريب التنسيق بين اليد والعين والتفاعل السريع.'
    },
    shortDescription: {
      en: 'Action-packed zombie shooter game. Control a flashlight, shoot zombies, earn points, and survive the time limit. Great for reflexes and hand-eye coordination.',
      ar: 'لعبة إطلاق نار على الزومبي مليئة بالإثارة. تحكم في مصباح يدوي، أطلق النار على الزومبي، احصل على نقاط، وابق على قيد الحياة في الوقت المحدد. رائعة للانعكاسات والتنسيق بين اليد والعين.'
    },
    features: {
      en: [
        'WASD player movement',
        'Mouse aiming and shooting',
        'Random zombie spawning',
        'Score tracking system',
        'Time-limited rounds',
        'Action-packed gameplay'
      ],
      ar: [
        'حركة اللاعب بـ WASD',
        'التصويب والرماية بالماوس',
        'ظهور الزومبي بشكل عشوائي',
        'نظام تتبع النقاط',
        'جولات محدودة بالوقت',
        'لعب مليء بالإثارة'
      ]
    },
    technologies: ['Scratch', 'Game Development', 'Action Games', 'Interactive Gaming'],
    image: '/assets/zombie-game/Screenshot 2025-11-06 141410.png',
    circuitDiagram: '/assets/zombie-game/Screenshot 2025-11-06 141410.png',
    functionality: `
    1. Players start the game by clicking the green flag.
    2. The player (flashlight) moves using WASD keys and aims with the mouse.
    3. Zombies spawn randomly at screen edges every second and move towards the player.
    4. Players click the mouse to shoot projectiles at zombies.
    5. Successfully hitting zombies increases the score.
    6. A timer counts down from 10 seconds, creating time pressure.
    7. The game ends if a zombie touches the player or the timer reaches zero.
    `
  }
}

export const getProjectById = (id) => {
  return projectsData[id] || null
}

export const getAllProjects = () => {
  return Object.values(projectsData)
}

export const getProjectsByCategory = (category) => {
  if (!category || category === 'All') {
    return Object.values(projectsData)
  }
  return Object.values(projectsData).filter(project => project.category === category)
}

export const getAllCategories = () => {
  const categories = [...new Set(Object.values(projectsData).map(project => project.category))]
  return categories.sort()
}
