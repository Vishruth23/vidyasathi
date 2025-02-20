import React from 'react';
import { Book, Video, Brain, FileQuestion, Activity, Star, Clock, Calendar, BarChart3 } from 'lucide-react';
import DerivativesMindMap from "./Visualisation";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [selectedCourse, setSelectedCourse] = React.useState(null);
  const [showQuizModal, setShowQuizModal] = React.useState(false);

  const courses = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      progress: 75,
      lastAccessed: '2024-03-15',
      topics: ['Calculus', 'Linear Algebra', 'Statistics'],
      instructor: 'Dr. Sarah Johnson',
      nextLesson: 'Complex Integration'
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      progress: 60,
      lastAccessed: '2024-03-14',
      topics: ['Mechanics', 'Thermodynamics', 'Waves'],
      instructor: 'Prof. Michael Chen',
      nextLesson: 'Angular Momentum'
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      progress: 90,
      lastAccessed: '2024-03-13',
      topics: ['Organic Chemistry', 'Inorganic Analysis', 'Lab Safety'],
      instructor: 'Dr. Emily Rodriguez',
      nextLesson: 'Titration Techniques'
    },
    {
      id: 4,
      name: 'Biology Systems',
      progress: 45,
      lastAccessed: '2024-03-12',
      topics: ['Cell Biology', 'Genetics', 'Ecology'],
      instructor: 'Prof. James Wilson',
      nextLesson: 'DNA Replication'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'video',
      title: 'Quantum Mechanics Introduction',
      timestamp: '2 hours ago',
      duration: '15 minutes'
    },
    {
      id: 2,
      type: 'quiz',
      title: 'Calculus Mid-term Practice',
      timestamp: '1 day ago',
      score: '85%'
    },
    {
      id: 3,
      type: 'ai_session',
      title: 'Chemical Bonding Discussion',
      timestamp: '2 days ago',
      duration: '30 minutes'
    }
  ];

  const upcomingQuizzes = [
    {
      id: 1,
      title: 'Mathematics Quiz',
      subject: 'Calculus',
      questions: 20,
      duration: '30 minutes',
      dueDate: '2024-03-20'
    },
    {
      id: 2,
      title: 'Physics Test',
      subject: 'Mechanics',
      questions: 15,
      duration: '25 minutes',
      dueDate: '2024-03-22'
    },
    {
      id: 3,
      title: 'Chemistry Lab Quiz',
      subject: 'Organic Chemistry',
      questions: 25,
      duration: '40 minutes',
      dueDate: '2024-03-25'
    }
  ];

  const aiVideos = [
    {
      id: 1,
      title: 'Understanding Derivatives',
      subject: 'Mathematics',
      duration: '12:30',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=300',
      views: 245
    },
    {
      id: 2,
      title: 'Wave Particle Duality',
      subject: 'Physics',
      duration: '15:45',
      thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=300',
      views: 189
    },
    {
      id: 3,
      title: 'DNA Structure',
      subject: 'Biology',
      duration: '18:20',
      thumbnail: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?auto=format&fit=crop&w=300',
      views: 312
    },
    {
      id: 4,
      title: 'Chemical Equilibrium',
      subject: 'Chemistry',
      duration: '14:15',
      thumbnail: 'https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&w=300',
      views: 156
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Learning Tools</h2>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              <Activity className="h-5 w-5" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'courses' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              <Book className="h-5 w-5" />
              <span>My Courses</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'videos' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              <Video className="h-5 w-5" />
              <span>AI Videos</span>
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'quiz' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              <FileQuestion className="h-5 w-5" />
              <span>Practice Quiz</span>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              <Brain className="h-5 w-5" />
              <span>AI Tutor</span>
            </button>
            <button
              onClick={() => setActiveTab('viz')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'viz' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Visualisations and Mindmaps</span>
            </button>
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Study Streak</span>
                  <span className="font-medium">15 days</span>
                </div>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Study Time</span>
                  <span className="font-medium">4.5 hrs today</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Welcome back, Alex!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Progress Overview</h3>
                  <div className="space-y-4">
                    {courses.map(course => (
                      <div key={course.id}>
                        <div className="flex justify-between mb-1">
                          <span>{course.name}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map(activity => (
                      <div key={activity.id} className="flex items-center space-x-3">
                        {activity.type === 'video' && <Video className="h-5 w-5 text-indigo-600" />}
                        {activity.type === 'quiz' && <FileQuestion className="h-5 w-5 text-indigo-600" />}
                        {activity.type === 'ai_session' && <Brain className="h-5 w-5 text-indigo-600" />}
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-gray-600">
                            {activity.timestamp}
                            {activity.duration && ` • ${activity.duration}`}
                            {activity.score && ` • Score: ${activity.score}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {upcomingQuizzes.map(quiz => (
                    <div key={quiz.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Calendar className="h-5 w-5 text-indigo-600" />
                        <span className="text-sm text-gray-600">{quiz.dueDate}</span>
                      </div>
                      <h4 className="font-medium">{quiz.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {quiz.questions} questions • {quiz.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">My Courses</h2>
                <div className="flex space-x-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Clock className="h-5 w-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Star className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map(course => (
                  <div 
                    key={course.id} 
                    className="border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedCourse(course)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">{course.name}</h3>
                      <span className="text-sm text-gray-600">Last accessed: {course.lastAccessed}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Instructor:</span> {course.instructor}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Next Lesson:</span> {course.nextLesson}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {course.topics.map(topic => (
                          <span 
                            key={topic}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">AI-Generated Videos</h2>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Request New Video
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiVideos.map(video => (
                  <div key={video.id} className="border rounded-lg overflow-hidden">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.subject}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-600">{video.views} views</span>
                        <button className="text-indigo-600 hover:text-indigo-800">Watch Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Practice Quizzes</h2>
              <div className="space-y-4">
                {upcomingQuizzes.map(quiz => (
                  <div key={quiz.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold">{quiz.title}</h3>
                        <p className="text-gray-600">
                          {quiz.subject} • {quiz.questions} questions • {quiz.duration}
                        </p>
                      </div>
                      <button 
                        onClick={() => setShowQuizModal(true)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                      >
                        Start Quiz
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">AI Tutor</h2>
              <div className="border rounded-lg p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ask your question
                  </label>
                  <textarea
                    className="w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Type your question here... (e.g., 'Can you explain the concept of derivatives in calculus?')"
                  ></textarea>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    Get Answer
                  </button>
                  <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50">
                    Voice Input
                  </button>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="font-semibold">Suggested Topics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <h4 className="font-medium">Calculus Concepts</h4>
                      <p className="text-sm text-gray-600">Derivatives, integrals, and limits</p>
                    </button>
                    <button className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <h4 className="font-medium">Physics Problems</h4>
                      <p className="text-sm text-gray-600">Mechanics and thermodynamics</p>
                    </button>
                    <button className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <h4 className="font-medium">Chemistry Help</h4>
                      <p className="text-sm text-gray-600">Chemical reactions and bonding</p>
                    </button>
                    <button className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <h4 className="font-medium">Biology Assistance</h4>
                      <p className="text-sm text-gray-600">Cell biology and genetics</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'viz' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Visualisations and Mindmaps</h2>
              <p className="text-gray-600">Explore interactive visualizations and concept mindmaps to enhance your learning.</p>
              <div className="mt-8">
                <DerivativesMindMap />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;