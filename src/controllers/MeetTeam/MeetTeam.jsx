import styles from "./MeetTeam.module.scss";
import { Link } from "react-router-dom"; 

const reasons = [
  {
    id: 1,
    title: "Save tons of time",
    description:
      "Tracking down people’s addresses via email can take weeks. Our little hack takes 60 seconds.",
    imgSrc: "https://d2ct96dh4lkill.cloudfront.net/assets/animations/stopwatch.svg?v=1739207165",
  },
  {
    id: 2,
    title: "Private and secure",
    description:
      "We pride ourselves on keeping your data private and never share it with anyone.",
    imgSrc: "https://d2ct96dh4lkill.cloudfront.net/assets/images/illustration_600_lock.svg?v=1739207165",
  },
  {
    id: 3,
    title: "Celebrate birthdays",
    description:
      "Never miss a birthday again! We’ll remind you and help you send a thoughtful message.",
    imgSrc: "https://d2ct96dh4lkill.cloudfront.net/assets/images/illustration_600_birthday_hand.svg?v=1739207165",
  },
  {
    id: 4,
    title: "Completely free",
    description:
      "Enjoy all our features at no cost. No hidden fees, just a great experience.",
    imgSrc: "https://d2ct96dh4lkill.cloudfront.net/assets/images/illustration_600_free_tag.svg?v=1739207165",
  },
];

const MeetTeam = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>4 reasons to use Postable</h2>
      <div className={styles.reasons}>
        {reasons.map((reason) => (
          <div key={reason.id} className={styles.reason}>
            <img src={reason.imgSrc} alt={reason.title} className={styles.image} />
            <div className={styles.textContent}>
              <h3>{reason.id}. {reason.title}</h3>
              <p>{reason.description}</p>
              <button className={styles.button}><Link to="/signup">Sign Up</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
