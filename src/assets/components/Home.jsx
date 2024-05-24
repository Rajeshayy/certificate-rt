import React, { useState, useEffect } from 'react';
import supabase from './supabase'; // Ensure you have configured supabase in this file

const Home = () => {
  const [facultyCount, setFacultyCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    fetchFacultyCount();
    fetchStudentCount();
  }, []);

  const fetchFacultyCount = async () => {
    const { count, error } = await supabase
      .from('fdp_form')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Error fetching faculty count:', error);
    } else {
      setFacultyCount(count);
    }
  };

  const fetchStudentCount = async () => {
    const { count, error } = await supabase
      .from('students')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Error fetching student count:', error);
    } else {
      setStudentCount(count);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="mt-20 flex space-x-10">
        <div className="bg-blue-500 text-white p-10 rounded-lg shadow-md text-center w-80">
          <h2 className="text-3xl font-bold mb-4">Faculty Count</h2>
          <p className="text-5xl">{facultyCount}</p>
        </div>
        <div className="bg-green-500 text-white p-10 rounded-lg shadow-md text-center w-80">
          <h2 className="text-3xl font-bold mb-4">Student Count</h2>
          <p className="text-5xl">{studentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
