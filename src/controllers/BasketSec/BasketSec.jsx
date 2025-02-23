import React, { useEffect } from 'react';
import styles from './BasketSec.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketThunk } from '../../redux/reducers/productsSlice';
import Layout from '../Layout/Layout';

const BasketSec = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketThunk());
  }, [dispatch]);

  const basket = useSelector((state) => state.products.baskets) || [];

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cards}>
          {basket.length > 0 ? (
            basket.map((item, index) => (
              <div key={item.id || index} className={styles.card}>
                <img src={item.thumbnail} alt={item.title} />
                <div className={styles.cardContent}>
                  <p className={styles.title}>{item.title}</p>
                  <span className={styles.price}>{item.price} $</span>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.emptyMessage}>Səbət boşdur.</p>
          )}
        </div>
      </div>
    </Layout>
  );
  
};

export default BasketSec;
