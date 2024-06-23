import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    isAttendingWithGuest: false,
    guestName: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  // Use useEffect to reset submittedData when formData changes
  useEffect(() => {
    if (submittedData) {
      setSubmittedData(null);
    }
  }, [formData]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            min={1}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Are you attending with a guest?</label>
          <input
            type="checkbox"
            name="isAttendingWithGuest"
            checked={formData.isAttendingWithGuest}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        {formData.isAttendingWithGuest && (
          <div className="mb-4">
            <label className="block text-gray-700">Guest Name:</label>
            <input
              type="text"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
      {submittedData && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-lg font-bold">Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Attending with Guest:</strong> {submittedData.isAttendingWithGuest ? 'Yes' : 'No'}</p>
          {submittedData.isAttendingWithGuest && <p><strong>Guest Name:</strong> {submittedData.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default Form;
