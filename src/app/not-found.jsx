import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>The page you are looking for is not available</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound