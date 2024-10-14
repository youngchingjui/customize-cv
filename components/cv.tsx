import React from 'react';
import { CVData } from '@/models/cv'

const CV: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between items-baseline border-b-2 border-blue-900 pb-2">
        <h1 className="text-3xl text-blue-800 mb-0">{data.name}</h1>
        <div className="text-right text-gray-600">
          <a href={`tel:${data.contact.phone}`} className="text-blue-800 hover:underline">{data.contact.phone}</a> |  
          <a href={`mailto:${data.contact.email}`} className="text-blue-800 hover:underline">{data.contact.email}</a> |  
          <a href={data.contact.github} className="text-blue-800 hover:underline">Github</a> | 
          <a href={data.contact.linkedin} className="text-blue-800 hover:underline">LinkedIn</a>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Summary</h2>
        <p>{data.summary}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Professional Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <div className="font-bold text-blue-900">{job.title}</div>
            <div className="italic text-blue-900">{job.company}, {job.location} ({job.period})</div>
            <ul className="list-disc pl-4">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="mb-1">{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="w-1/2 pr-2">
          <div className="mb-4">
            <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Skills</h2>
            <p>{data.skills.join(' • ')}</p>
          </div>
        </div>
        <div className="w-1/2 pl-2">
          <div className="mb-4">
            <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Education</h2>
            {data.education.map((edu, index) => (
              <p key={index}>
                <strong>{edu.institution}</strong><br />
                {edu.degree}<br />
                {edu.details}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
