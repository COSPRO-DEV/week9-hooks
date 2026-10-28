import { useState, useEffect } from 'react'

function ProfileCard() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setProfile({ name: 'Ada Lovelace', email: 'ada@example.com', city: 'London' })
      setLoading(false)
    }, 2000)

    // Cleanup: cancel the timer if the component unmounts before it fires
    return () => clearTimeout(timerId)
  }, [])

  return (
    <div>
      <h2>Profile Card</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>City: {profile.city}</p>
        </div>
      )}
    </div>
  )
}

export default ProfileCard