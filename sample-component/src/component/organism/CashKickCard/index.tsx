import { Offer } from "../../molecules/OfferText";
import { Button } from "../../atoms/Button";
import "./index.css";

export const CashKickCard = () => (
  <div className="card">
    <Offer />
    <Button
      label="New Cash Kick"
      onClick={() => alert("Cash Kick Launched!")}
    />
  </div>
);
