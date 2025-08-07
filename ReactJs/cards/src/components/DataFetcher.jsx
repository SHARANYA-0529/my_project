import React, { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [students, setStudents] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    fetch('https://686503325b5d8d03397f4dbe.mockapi.io/api/v1/stdata')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading students…</p>;
  if (error)   return <p>Error: {error}</p>;
  if (!students.length) return <p>No students found.</p>;

  return (
    <div>
      {students.map(student => (
        <div key={student.id} style={styles.card}>
          <h3>{student.name}</h3>
          <p>{student.contact}</p>
          <p>{student.email}</p>
          <p>{student.city}</p>
          <p>{student.country}</p>
          <p>{student.pincode}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    
  },
};
