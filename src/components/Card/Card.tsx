import { User } from "../../types";
import "./Card.css";
import { priorityIconMapper } from "./priorityIconMapper";

interface CardProps {
  id: string;
  user: User | undefined;
  title: string;
  tags: string[];
  priority: number;
}

const Card = ({ id, user, title, tags, priority }: CardProps): JSX.Element => {
  return (
    <div className="card-container">
      <div className="card-id-wrapper">
        <div className="card-id">{id}</div>
        <div className="card-profile">
          <div className="card-profile-initial">
            {user?.name[0]}
            {user?.name[1]}
          </div>
          <div
            className={
              user?.available
                ? "card-profile-status online"
                : "card-profile-status offline"
            }
          ></div>
        </div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-tag">
        <div className="card-tag-icon">{priorityIconMapper[priority].icon}</div>
        {tags.map((tag) => (
          <div key={tag} className="card-tag-box">
            <span className="card-tag-content">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
