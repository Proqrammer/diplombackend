import { useState } from "react";
import styles from "./FaqSec.module.scss";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "What is an Address Book?", answer: "An Address Book is an application where you can store and manage contact information." },
    { question: "How can I add a new contact?", answer: "Click the 'Add Contact' button and fill in the required information." },
    { question: "How can I delete a contact?", answer: "Click the trash icon next to the contact you want to delete." },
    { question: "How can I edit a contact's details?", answer: "Go to the contact’s detail page or click the edit button to update their information." },
    { question: "Can I search for a specific contact?", answer: "Yes, use the search bar to quickly find a contact by name or phone number." },
    { question: "Is it possible to import contacts?", answer: "Yes, you can import contacts from a CSV file or other supported formats." },
    { question: "Can I export my contacts?", answer: "Yes, you can export your contacts as a CSV file for backup or transfer." },
    { question: "Does Address Book support multiple users?", answer: "It depends on the version you are using. Some versions allow multiple users with different access levels." },
    { question: "Can I categorize my contacts?", answer: "Yes, you can assign labels or categories to organize your contacts." },
    { question: "Is there a way to restore deleted contacts?", answer: "Some versions have a trash or archive feature where deleted contacts can be restored." },
    { question: "Can I sync my contacts with other apps?", answer: "Yes, you can sync your contacts with services like Google Contacts or Outlook." },
    { question: "Is Address Book available on mobile devices?", answer: "Yes, it is available as a mobile app for both Android and iOS." },
    { question: "How secure is my contact data?", answer: "Your data is stored securely with encryption, and access is restricted based on user roles." },
    { question: "Can I share a contact with others?", answer: "Yes, you can share a contact via email or by exporting their details." },
  ];

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <p className={styles.description}>Here are some common questions and answers about how our system works.</p>

      <div className={styles.faqGrid}>
        <div className={styles.column}>
          {faqData.slice(0, 7).map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={() => toggleQuestion(index)}>
                {item.question}
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ""}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          {faqData.slice(7, 14).map((item, index) => (
            <div key={index + 7} className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={() => toggleQuestion(index + 7)}>
                {item.question}
                <span className={styles.icon}>{openIndex === index + 7 ? "−" : "+"}</span>
              </button>
              <div className={`${styles.faqAnswer} ${openIndex === index + 7 ? styles.open : ""}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
