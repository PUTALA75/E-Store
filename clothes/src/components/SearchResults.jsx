import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SearchResults = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('searchResults')) || []
    setResults(data)
  }, [])

  if (results.length === 0) return <h2>No results found</h2>

  return (
  <div style={{ padding: '2rem' }}>
  <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>
    Search Results ({results.length})
  </h2>

  {results.length === 0 ? (
    <p style={{ fontSize: '1.1rem', color: '#64748b' }}>No matching items found.</p>
  ) : (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "1.5rem"
    }}>
      {results.map(item => (
        <div key={item.id} style={{
          background: '#f8fafc',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          padding: '1rem',
          textAlign: "center",
          transition: 'transform 0.2s ease',
        }}>
          <Link to={`/unique/${item.id}`} style={{ textDecoration: 'none', color: '#1e293b' }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100px",
                height: "140px",
                objectFit: "contain",
                marginBottom: '0.75rem'
              }}
            />
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              minHeight: '3em'
            }}>{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  )}
</div>

 
  )
}

export default SearchResults
