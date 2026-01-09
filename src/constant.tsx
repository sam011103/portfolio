export function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export const projects = [
  {
    id: 1,
    title: 'Children Monitoring System',
    name: 'SmartWatch',
    stack: 'Laravel, Bootstrap, MySQL, JavaScript, and HTML',
    desc: [
      'SmartWatch is an AI integrated smart monitoring system which helps to secure your children safely. It is currently able to detect fire and analyze person count. Features such as app notifications and email alerts are used to notify the user about the hazards. Screenshots are saved to the gallery automatically regarding to person count varying and hazard detected.',
      <>
        SmartWatch is developed with Laravel PHP, Bootstrap and JavaScript. The AI model was trained on Roboflow Server. For more information about the dataset and model performance, you can visit{" "}
        <a
          href="https://universe.roboflow.com/sam-xa5ea/children-monitoring-0r64f"
          className="underline"
        >
          https://universe.roboflow.com/sam-xa5ea/children-monitoring-0r64f
        </a>.
      </>,  
    ],
    gh_link:"https://github.com/sam011103/Final-Year-Project",
    features: [
      {name:'AI detection for fire hazards', img:"fire-detection.gif", img_alt:"Fire Detection"},
      {name:'Real-time alerts via mails and app notifications', img:"mail-notification.png", img_alt:"Mail Notification"},
      {name:'Statistical charts for person counts and number of hazards detected provided', img:"stat-charts.png", img_alt:"Stat Charts"},
      {name:'Gallery with screenshots from hazard detected', img:"gallery.png", img_alt:"Gallery"},
    ],
    duration: 'March, 2024 - September, 2024 (6 months)',
  },
  {
    id: 2,
    title: "Task Management System",
    name: 'TaskFlow',
    stack: 'Laravel, React.js, Inertia.js, Tailwind, and MySQL',
    desc: [
      "This is a task management system with real-time status update feature in the form of Single Page Application (SPA). The system is named as TaskFlow. It is meant to help users to prioritize tasks into daily to-do lists. Users can get notified through app notifications and mail messsages when their tasks are being urgent or overdue. Therefore, users can take corresponding actions immediately to manage their tasks.",
      "TaskFlow is built with Laravel, Inertia.js, React.js and TypeScript. Real-time features such as detecting whether there are any tasks being urgent or overdue is done using Laravel's Scheduler. It is scheduled for checking for every minute. To broadcast app notification and perform real-time update at the Client side, Laravel Notification, Event and Pusher did a great job. Laravel's Echo is also used in the Client side to listen for the broadcasting events."
    ],
    gh_link:"https://github.com/sam011103/task-management-system.git",
    features: [
      {name:"Real-time dashboard updates", img:"real-time-dashboard-update.gif", img_alt:"Real-Time Dashboard Update"},
      {name:"App notification broadcasted to all pages", img:"app-notification-broadcast.gif", img_alt:"App Notification Broadcast"},
      {name:"Scheduler running every minute to update task status", img:"scheduler-task-update.gif", img_alt:"Scheduler Task Update"},
      {name:"Task prioritization available", img:"task-prioritization.gif", img_alt:"Task Prioritization"},
      {name:"Task filtering and sorting with multiple criteria", img:"task-filtering.gif", img_alt:"Task Filtering"},
    ],

    duration: 'September, 2025 - October, 2025 (1 month)',
  },
]