import { User } from "../../types";
import "./Card.css";

interface CardDetails {
  id: string;
  userObj: User | undefined;
  title: string;
  tag: string[];
  priority: number;
}

const Card = ({
  id,
  userObj,
  title,
  tag,
  priority,
}: CardDetails): JSX.Element => {
  const priorityNames = ["No Priority", "Low", "Medium", "High", "Urgent"];

  return (
    <div className="card-container">
      <div className="card-id-wrapper">
        <div className="card-id">{id}</div>
        <div className="card-profile">
          <div className="card-profile-initial">
            {userObj?.name[0]}
            {userObj?.name[1]}
          </div>
          <div
            className={
              userObj?.available
                ? "card-profile-initial-available card-profile-initial-available-true"
                : "card-profile-initial-available"
            }
          ></div>
        </div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-tag">
        <div className="card-tag-title">{priorityNames[priority]}</div>
        {tag.map((t) => (
          <div key={t} className="card-tag-box">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
