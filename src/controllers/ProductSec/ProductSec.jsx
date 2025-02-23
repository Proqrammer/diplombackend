import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductSec.module.scss';
import { getProductsThunk, postBasketThunk } from '../../redux/reducers/productsSlice.js';

const ProductSec = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    const products = useSelector((state) => state.products.products) || [];

    const addToBasket = (item) => {
        dispatch(postBasketThunk(item));
    };

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {products.length > 0 ? (
                    products.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <img src={item.thumbnail} alt={item.title} className={styles.image}/>
                            <p>{item.title}</p>
                            <p>{item.price} $</p>
                            <button onClick={() => addToBasket(item)}>Səbətə əlavə et</button>
                        </div>
                    ))
                ) : (
                    <p>Məhsul tapılmadı.</p>
                )}
            </div>
        </div>
    );
};

export default ProductSec;
