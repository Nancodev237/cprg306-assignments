import Link from 'next/link'
import React from 'react'

function StudentInfo() {
  return (
    <div>
      <p>Name: Alan Ngayo Nankam</p>
      <p>Github:{' '}
        <Link 
        href="https://github.com/Nancodev237/cprg306-assignments.git"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline' }}
        >Nancodev237/cprg306-assignments</Link>
      </p>
      
    </div>
  )
}

export default StudentInfo
