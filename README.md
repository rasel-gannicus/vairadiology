# 404 Project Not Found

A comprehensive 3-in-1 frontend application combining task management, data visualization, and image annotation tools. Built with Next.js, TypeScript, and modern web technologies.

## Features

### 🎯 Task Management (`/tasks`)
- **Kanban Board**: Organize tasks in "To Do", "In Progress", and "Done" columns
- **Date-based Organization**: Select specific dates to view and manage daily tasks
- **Drag & Drop**: Seamlessly move tasks between columns
- **Rich Task Details**: Title, description, priority levels, due dates, and custom tags
- **Persistent Storage**: All data saved to localStorage
- **Responsive Design**: Works perfectly on desktop and mobile

### 📊 Dashboard Analytics (`/dashboard`)
- **Task Statistics**: Overview cards showing total, completed, and in-progress tasks
- **Status Distribution**: Bar chart showing task breakdown by status
- **Priority Analysis**: Pie chart displaying task distribution by priority level
- **Completion Trends**: Line chart tracking daily task completion over time
- **Tag Analytics**: Horizontal bar chart showing most frequently used tags
- **Real-time Updates**: Charts automatically update as you manage tasks

### 🖼️ Image Annotation (`/annotate`)
- **Multi-image Support**: Navigate through multiple images with thumbnail grid
- **Polygon Drawing**: Click to create precise polygon annotations
- **Interactive Controls**: Select, delete, and manage annotations easily
- **Visual Feedback**: Different colors for active, selected, and completed polygons
- **Persistent Annotations**: All annotations saved to localStorage per image
- **Intuitive Interface**: Clear instructions and responsive design

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (100% type-safe)
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand for global state
- **Drag & Drop**: @dnd-kit library
- **Charts**: Recharts with shadcn chart components
- **Date Handling**: date-fns library
- **Storage**: localStorage for persistence
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd 404-project-not-found
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── tasks/             # Task management page
│   ├── dashboard/         # Analytics dashboard
│   ├── annotate/          # Image annotation tool
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── tasks/            # Task-related components
│   ├── dashboard/        # Chart components
│   └── annotate/         # Annotation components
├── lib/                  # Utilities and stores
│   └── stores/           # Zustand state management
└── public/               # Static assets
\`\`\`

## Key Components

### Task Management
- `<DateSelector />`: Reusable date picker component
- `<Board />`: Main Kanban board container
- `<Column />`: Individual status columns with drag & drop
- `<TaskCard />`: Individual task cards with actions
- `<TaskDialog />`: Modal for creating/editing tasks

### Dashboard
- `<ChartCard />`: Reusable chart container
- `<TasksByStatusChart />`: Bar chart for status distribution
- `<TasksByPriorityChart />`: Pie chart for priority breakdown
- `<TasksCompletedChart />`: Line chart for completion trends
- `<TasksByTagChart />`: Horizontal bar chart for tag usage

### Image Annotation
- `<ImageAnnotator />`: Main canvas-based annotation tool
- Polygon drawing with HTML5 Canvas
- Multi-image navigation system
- Persistent annotation storage

## Development Challenges & Solutions

### 🎯 Challenge: Complex State Management
**Problem**: Managing tasks across different dates and components while maintaining data consistency.

**Solution**: Implemented Zustand store with persistent middleware, creating a centralized state management system that automatically syncs with localStorage and provides type-safe access across all components.

### 🎨 Challenge: Drag & Drop Implementation
**Problem**: Creating smooth drag & drop functionality that works across different screen sizes and maintains visual feedback.

**Solution**: Used @dnd-kit library for accessibility-compliant drag & drop with custom drag overlay and visual indicators. Implemented proper collision detection and state updates.

### 📊 Challenge: Dynamic Chart Data Processing
**Problem**: Transforming task data into meaningful chart visualizations with real-time updates.

**Solution**: Created computed data transformations in chart components that automatically recalculate when task data changes. Used Recharts for responsive, interactive charts.

### 🖼️ Challenge: Canvas-based Image Annotation
**Problem**: Building a precise polygon drawing tool that works on different screen sizes and maintains annotation accuracy.

**Solution**: Implemented HTML5 Canvas with proper coordinate scaling, event handling for polygon creation/completion, and visual feedback for different annotation states.

### 📱 Challenge: Responsive Design
**Problem**: Ensuring all three applications work seamlessly across desktop, tablet, and mobile devices.

**Solution**: Used Tailwind CSS responsive utilities, flexible grid layouts, and adaptive component sizing. Implemented mobile-first design principles.

## Usage Guide

### Task Management
1. Select a date using the date picker
2. Click "Add Task" to create new tasks
3. Fill in task details (title, description, priority, tags)
4. Drag tasks between columns to update status
5. Click the menu on any task to edit or delete

### Dashboard
1. Navigate to `/dashboard` to view analytics
2. Charts automatically update based on your task data
3. View completion trends, priority distribution, and tag usage
4. Use insights to improve productivity

### Image Annotation
1. Navigate to `/annotate` to start annotating
2. Use thumbnail grid or navigation buttons to switch images
3. Click on image to start drawing polygons
4. Complete polygons by double-clicking or clicking the first point
5. Click existing polygons to select/delete them
6. All annotations are automatically saved

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Drag & drop by [@dnd-kit](https://dndkit.com/)

---

**"Believe in the code that believes in you!"** 🚀

Built with ❤️ and lots of TypeScript
