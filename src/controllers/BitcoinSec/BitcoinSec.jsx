import styles from "./BitcoinSec.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Kenny D.",
    text: "Terrific variety, dependable delivery, and exceptional address book! Now I don't miss a birthday!! Super!!",
  },
  {
    name: "Laura M.",
    text: "I love the card selections, the address book and mailing directly!",
  },
  {
    name: "Stephanie S.",
    text: "I love that Postable keeps my addresses, and mails the cards for me! I just get to do the fun design part.",
  },
  {
    name: "Jane W.",
    text: "Fantastic Service!! Easy to setup address book. Even easier to send the cards!! Sent 100 cards for a great price!",
  },
  {
    name: "Cindy B.",
    text: "I appreciate that I don't have to redo my addresses each year. Saves me time!",
  },
];

const BitcoinSec = () => {
  return (
    <section className={styles.bitcoinSec}>
      <h2>Over 1M Happy Customers</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        breakpoints={{
          // Tablet view
          1024: {
            slidesPerView: 2,
          },
          // Mobile view
          768: {
            slidesPerView: 1,
          },
          // Small mobile view
          480: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p>{review.text}</p>
            <span>— {review.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BitcoinSec;
