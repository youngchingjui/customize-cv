'use client';

import { useState } from 'react';

export default function CvForm() {
  const [cvData, setCvData] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/update-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cvData, userId: 'your-user-id' }), // Replace with actual user ID logic
      });
      if (response.ok) {
        alert('CV updated successfully!');
      } else {
        alert('Failed to update CV.');
      }
    } catch (error) {
      console.error('Error updating CV:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows={10}
        value={cvData}
        onChange={(e) => setCvData(e.target.value)}
        placeholder="Enter your CV data in JSON format"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update CV
      </button>
    </form>
  );
}
