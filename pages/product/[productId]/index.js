import React from 'react'
import { useRouter } from 'next/router'

const productDetail = () => {
    const router = useRouter()
    const productId = router.query.productId

    return (
        <div>Product Detail Page {productId}</div>
    )
}

export default productDetail