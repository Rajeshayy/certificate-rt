import React, { useState, useEffect } from 'react';
import supabase from './supabase'; // Ensure you have configured supabase in this file

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('faculty'); // Default to 'faculty'
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRadioChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userType === 'faculty') {
      fetchFacultyData();
    } else if (userType === 'student') {
      fetchStudentData();
    }
  };

  const fetchFacultyData = async () => {
    let query = supabase.from('fdp_form').select('*');

    if (searchTerm) {
      query = query.or(
        `facultyname.ilike.%${searchTerm}%,department.ilike.%${searchTerm}%,programtitle.ilike.%${searchTerm}%,institutename.ilike.%${searchTerm}%`
      );
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching faculty data:', error);
    } else {
      setData(data);
    }
  };

  const fetchStudentData = async () => {
    let query = supabase.from('students').select('*');

    if (searchTerm) {
      query = query.or(
        `regdno.ilike.%${searchTerm}%,studentname.ilike.%${searchTerm}%,department.ilike.%${searchTerm}%,programname.ilike.%${searchTerm}%`
      );
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching student data:', error);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    if (userType === 'faculty') {
      fetchFacultyData();
    } else if (userType === 'student') {
      fetchStudentData();
    }
  }, [userType]);

  useEffect(() => {
    if (userType === 'faculty') {
      fetchFacultyData();
    } else if (userType === 'student') {
      fetchStudentData();
    }
  }, [searchTerm, userType]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">Search</h1>
      <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="search" className="block text-gray-700 font-bold mb-2">Search</label>
          <input
            type="text"
            id="search"
            name="search"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter search term..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">User Type</label>
          <div className="flex justify-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="userType"
                value="faculty"
                checked={userType === 'faculty'}
                onChange={handleRadioChange}
                className="form-radio"
              />
              <span className="ml-2">Faculty</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={handleRadioChange}
                className="form-radio"
              />
              <span className="ml-2">Student</span>
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </form>
      {userType === 'faculty' && data.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Faculty Data</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Faculty Name</th>
                  <th className="px-4 py-2 border">Department</th>
                  <th className="px-4 py-2 border">Program Title</th>
                  <th className="px-4 py-2 border">Institute Name</th>
                  <th className="px-4 py-2 border">Program Type</th>
                  <th className="px-4 py-2 border">From Date</th>
                  <th className="px-4 py-2 border">To Date</th>
                  <th className="px-4 py-2 border">URL</th>
                  <th className="px-4 py-2 border">Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{row.id}</td>
                    <td className="px-4 py-2 border">{row.facultyname}</td>
                    <td className="px-4 py-2 border">{row.department}</td>
                    <td className="px-4 py-2 border">{row.programtitle}</td>
                    <td className="px-4 py-2 border">{row.institutename}</td>
                    <td className="px-4 py-2 border">{row.programtype}</td>
                    <td className="px-4 py-2 border">{row.fromdate}</td>
                    <td className="px-4 py-2 border">{row.todate}</td>
                    <td className="px-4 py-2 border text-blue-600 underline"><a href={row.url} target="_blank" rel="noopener noreferrer">Link</a></td>
                    <td className="px-4 py-2 border">{new Date(row.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {userType === 'student' && data.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Student Data</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Registration No</th>
                  <th className="px-4 py-2 border">Student Name</th>
                  <th className="px-4 py-2 border">Department</th>
                  <th className="px-4 py-2 border">Program Type</th>
                  <th className="px-4 py-2 border">Organization</th>
                  <th className="px-4 py-2 border">Program Name</th>
                  <th className="px-4 py-2 border">Faculty Name</th>
                  <th className="px-4 py-2 border">From Date</th>
                  <th className="px-4 py-2 border">To Date</th>
                  <th className="px-4 py-2 border">Certificate</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{row.id}</td>
                    <td className="px-4 py-2 border">{row.regdno}</td>
                    <td className="px-4 py-2 border">{row.studentname}</td>
                    <td className="px-4 py-2 border">{row.department}</td>
                    <td className="px-4 py-2 border">{row.programtype}</td>
                    <td className="px-4 py-2 border">{row.organization}</td>
                    <td className="px-4 py-2 border">{row.programname}</td>
                    <td className="px-4 py-2 border">{row.facultyname}</td>
                    <td className="px-4 py-2 border">{row.fromdate}</td>
                    <td className="px-4 py-2 border">{row.todate}</td>
                    <td className="px-4 py-2 border text-blue-600 underline"><a href={row.uploadcertificate} target="_blank" rel="noopener noreferrer">Link</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
