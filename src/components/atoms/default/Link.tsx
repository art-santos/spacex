import React from 'react'
import Link from 'next/link'

const DefaultLink = ({ children, Href }) => {
return (
    <Link href={ Href }>
        <a>{children}</a>
    </Link>
)
}

export default DefaultLink
