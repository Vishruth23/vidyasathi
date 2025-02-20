import React, { useState } from 'react';
import {
  Book,
  Upload,
  FilePlus,
  Brain,
  FileQuestion,
  Users,
  BarChart3,
  Search
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('insights');
  const [searchTerm, setSearchTerm] = useState('');
  const [uploadedResources, setUploadedResources] = useState([
    { id: 1, name: 'Algebra Basics', type: 'PDF', size: '1.2 MB', lastModified: '2024-02-15' },
    { id: 2, name: 'Physics Formulas', type: 'DOCX', size: '800 KB', lastModified: '2024-02-18' }
  ]);

  const [aiContent, setAiContent] = useState([
    { topic: 'Photosynthesis', summary: 'Plants convert sunlight into energy using chlorophyll.', suggestions: ['Use real-life examples', 'Include an interactive quiz'] },
    { topic: 'Newton’s Laws', summary: 'Explain motion principles using force, mass, and acceleration.', suggestions: ['Show practical demonstrations', 'Use animated videos'] }
  ]);

  const [quizzes, setQuizzes] = useState([
    { id: 1, title: 'Math Quiz: Algebra', questions: 10, status: 'Published', date: '2024-02-10' },
    { id: 2, title: 'Physics Quiz: Motion', questions: 8, status: 'Draft', date: '2024-02-12' }
  ]);

  const [studentInsights, setStudentInsights] = useState([
    { name: 'John Doe', progress: 85, attendance: 92 },
    { name: 'Jane Smith', progress: 78, attendance: 88 },
    { name: 'Mark Johnson', progress: 90, attendance: 95 }
  ]);

  const handleUpload = () => {
    const newFile = {
      id: uploadedResources.length + 1,
      name: `New Resource ${uploadedResources.length + 1}`,
      type: 'PDF',
      size: '1 MB',
      lastModified: new Date().toISOString().split('T')[0]
    };
    setUploadedResources([...uploadedResources, newFile]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Educator Tools</h2>
          <nav className="space-y-2">
            <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}>
              <Users className="h-5 w-5" />
              <span>Overview</span>
            </button>
            <button onClick={() => setActiveTab('upload')} className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${activeTab === 'upload' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}>
              <Upload className="h-5 w-5" />
              <span>Upload Resources</span>
            </button>
            <button onClick={() => setActiveTab('ai-content')} className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${activeTab === 'ai-content' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}>
              <Brain className="h-5 w-5" />
              <span>AI-Enhanced Content</span>
            </button>
            <button onClick={() => setActiveTab('quizzes')} className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${activeTab === 'quizzes' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}>
              <FileQuestion className="h-5 w-5" />
              <span>Quizzes</span>
            </button>
            <button onClick={() => setActiveTab('insights')} className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${activeTab === 'insights' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}>
              <BarChart3 className="h-5 w-5" />
              <span>Student Insights</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          {/* Overview */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
                <p className="text-gray-700">Welcome back, Dr. Johnson! Here’s an overview of your classes, student progress, and resources.</p>
              </div>
            )}

          {/* Upload Resources */}
          {activeTab === 'upload' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Upload Resources</h2>
              <button onClick={handleUpload} className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <FilePlus className="h-5 w-5" />
                <span>Upload New File</span>
              </button>
              <ul className="mt-4 space-y-2">
                {uploadedResources.map((resource) => (
                  <li key={resource.id} className="border p-2 rounded-lg flex justify-between">
                    <span>{resource.name} ({resource.type})</span>
                    <span className="text-sm text-gray-500">{resource.size}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* AI-Enhanced Content */}
          {activeTab === 'ai-content' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">AI-Enhanced Content</h2>
              <div className="space-y-4">
                {aiContent.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">{item.topic}</h3>
                    <p className="text-gray-600">{item.summary}</p>
                    <p className="text-sm text-indigo-600">Suggestions: {item.suggestions.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quizzes */}
          {activeTab === 'quizzes' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Quizzes</h2>
              <ul className="space-y-2">
                {quizzes.map((quiz) => (
                  <li key={quiz.id} className="border p-2 rounded-lg flex justify-between">
                    <span>{quiz.title} ({quiz.questions} questions)</span>
                    <span className={`text-sm ${quiz.status === 'Published' ? 'text-green-600' : 'text-gray-500'}`}>{quiz.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Student Insights */}
          {activeTab === 'insights' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Student Insights</h2>
                
                {/* Visualization */}
                <div className="w-full h-64 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studentInsights} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="progress" fill="#4F46E5" name="Progress (%)" />
                      <Bar dataKey="attendance" fill="#10B981" name="Attendance (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Insights List */}
                <ul className="space-y-2">
                  {studentInsights.map((student, index) => (
                    <li key={index} className="border p-2 rounded-lg flex justify-between">
                      <span>{student.name}</span>
                      <span className="text-gray-600">Progress: {student.progress}% | Attendance: {student.attendance}%</span>
                    </li>
                  ))}
                </ul>
              </div>
          )}

        </div>
      </div>
    </div>
  );
};
export default TeacherDashboard;
