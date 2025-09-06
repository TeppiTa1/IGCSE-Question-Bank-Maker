import React from 'react'
import { FileText, Search, Download } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IGCSE Question Extractor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A tool to split IGCSE Past Papers into individual questions and query them to be compiled in a single PDF
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Search className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Extract Questions</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Load IGCSE past papers and automatically extract individual questions into separate files.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Supports standard IGCSE paper formats</li>
              <li>• Automatically detects question boundaries</li>
              <li>• Saves questions as individual PDFs</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Download className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Query & Compile</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Search through extracted questions and compile matching ones into a single PDF.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Search by subject, year, topic, or text content</li>
              <li>• Fuzzy matching with similarity controls</li>
              <li>• Export results as compiled PDF</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Getting Started</h3>
            <p className="text-blue-700">
              This is a Python-based tool. Use the terminal to run <code className="bg-blue-100 px-2 py-1 rounded">python script.py</code> to start extracting and querying questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App