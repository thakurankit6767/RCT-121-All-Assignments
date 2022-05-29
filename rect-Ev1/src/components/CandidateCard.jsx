import styles from "./CandidateCard.module.css";

function CandidateCard({ item }) {
  const {avatar,title,company_name,salary}=item
  return (
    <div data-testid="candidate-container" className={styles.container} >
      <img src={avatar} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name:{title}</div>
        <div>
          Title:{title} & Company Name:{company_name}
        </div>
      </div>
      <div>$ Salary:{salary}</div>
    </div>
  );
}

export default CandidateCard;
