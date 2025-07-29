import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Products = () => {
    const [prodList, setProdList] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreProducts = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
            const newProducts = res.data.products;

            setProdList(prev => [...prev, ...newProducts]);
            setSkip(prev => prev + 10);

            if (res.data.skip + res.data.limit >= res.data.total) {
                setHasMore(false);
            }

        } catch (err) {
            console.error("Error fetching data", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMoreProducts();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
            if (isBottom && !loading && hasMore) {
                fetchMoreProducts();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore, skip]);

    return (
        <>
            <h2>Products</h2>
            <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
                <table border="1" cellPadding={10} style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {loading && <p>Loading...</p>}
                {!hasMore && <p>No more products to show.</p>}
            </div>

        </>
    );
};

export default Products;
