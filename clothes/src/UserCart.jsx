import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar'

const UserCart = () => {
  const { cartItem, removeFromCart } = useCart()

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>
          Your Cart
        </h2>

        {cartItem.length === 0 ? (
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>Your Cart is Empty</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {cartItem.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  padding: '1rem',
                  textAlign: 'center',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <img
                    src={item.image}
                    alt={item.product}
                    style={{
                      width: '120px',
                      height: '160px',
                      objectFit: 'contain',
                      marginBottom: '0.75rem',
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0.25rem 0' }}>{item.product}</h3>
                <p style={{ fontSize: '1.25rem', color: '#2563eb', fontWeight: 'bold', margin: '0.25rem 0' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1rem' }}>{item.model}</p>
                <button
                  onClick={() => removeFromCart(item)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#dc2626')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#ef4444')}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default UserCart
