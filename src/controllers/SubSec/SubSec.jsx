import styles from "./SubSec.module.scss";

const Subscriptions = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Maksimum 50 kişi ekleme",
        "Temel arama özelliği",
        "Manuel yedekleme",
        "E-posta desteği"
      ],
    },
    {
      name: "Standard",
      price: "$9.99 / ay",
      features: [
        "Maksimum 500 kişi ekleme",
        "Gelişmiş arama & filtreleme",
        "Otomatik yedekleme",
        "Öncelikli destek"
      ],
    },
    {
      name: "Premium",
      price: "$19.99 / ay",
      features: [
        "Sınırsız kişi ekleme",
        "Akıllı kategori yönetimi",
        "Senkronizasyon (Google, Outlook)",
        "24/7 Canlı destek"
      ],
    }
  ];

  return (
    <div className={styles.subscriptionsContainer}>
      {/* Üst Bilgi */}
      <div className={styles.header}>
        <h1>Address Book Nedir?</h1>
        <p>Address Book, kişilerinizi kolayca kaydetmenizi ve yönetmenizi sağlayan bir uygulamadır.</p>
      </div>

      {/* Abonelik Planları */}
      <div className={styles.plans}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.planCard}>
            <h2>{plan.name}</h2>
            <p className={styles.price}>{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button>Abone Ol</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
