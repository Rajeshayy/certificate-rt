import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import supabase from './supabase';

const Faculty = () => {
  const [formData, setFormData] = useState({
    facultyname: '',
    department: 'MCA',
    programtitle: '',
    institutename: '',
    programtype: '',
    fromdate: '',
    todate: '',
    url: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('fdp_form')
      .insert([formData]);

    if (error) {
      console.error('Error inserting data:', error);
      toast.error('Error inserting data');
    } else {
      console.log('Data inserted successfully:', data);
      toast.success('Data inserted successfully');
      // Clear form fields
      setFormData({
        facultyname: '',
        department: 'MCA',
        programtitle: '',
        institutename: '',
        programtype: '',
        fromdate: '',
        todate: '',
        url: '',
      });
    }
  };

  const handleReset = () => {
    setFormData({
      facultyname: '',
      department: 'MCA',
      programtitle: '',
      institutename: '',
      programtype: '',
      fromdate: '',
      todate: '',
      url: '',
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">FDP Form</h1>
      <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Faculty Name */}
          <div>
            <label htmlFor="facultyname" className="block text-gray-700 font-bold mb-2">Faculty Name</label>
            <input
              type="text"
              id="facultyname"
              name="facultyname"
              value={formData.facultyname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          
          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-gray-700 font-bold mb-2">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
              <option value="CSE">CSE</option>
            </select>
          </div>
          
          {/* Program Title */}
          <div>
            <label htmlFor="programtitle" className="block text-gray-700 font-bold mb-2">Program Title</label>
            <input
              type="text"
              id="programtitle"
              name="programtitle"
              value={formData.programtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          
          {/* Institute Name */}
          <div>
            <label htmlFor="institutename" className="block text-gray-700 font-bold mb-2">Institute Name</label>
            <input
              type="text"
              id="institutename"
              name="institutename"
              value={formData.institutename}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          
          {/* Type of Program */}
          <div>
            <label htmlFor="programtype" className="block text-gray-700 font-bold mb-2">Type of Program</label>
            <select
              id="programtype"
              name="programtype"
              value={formData.programtype}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select One</option>
              <option value="FDP">FDP</option>
              <option value="Internship">Internship</option>
              <option value="Certification">Certification</option>
              <option value="Others">Others</option>
            </select>
          </div>
          
          {/* From Date */}
          <div>
            <label htmlFor="fromdate" className="block text-gray-700 font-bold mb-2">From Date</label>
            <input
              type="date"
              id="fromdate"
              name="fromdate"
              value={formData.fromdate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          
          {/* To Date */}
          <div>
            <label htmlFor="todate" className="block text-gray-700 font-bold mb-2">To Date</label>
            <input
              type="date"
              id="todate"
              name="todate"
              value={formData.todate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          
          {/* Doc URL */}
          <div>
            <label htmlFor="url" className="block text-gray-700 font-bold mb-2">Doc URL</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div> 
        
        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Faculty;
