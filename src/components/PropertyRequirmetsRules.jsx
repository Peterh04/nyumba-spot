import CheckMarkIcon from "../assets/icons/checkmark.svg?react";
import "../styles/propertyRequirementsRules.css";

const requiremets_rules = [
  "National ID required for guests",
  "Visitors allowed",
  "Overnight guests allowed",
  "Quiet hours enforced",
  "Pets allowed",
];

const PropertyRequirmetsRules = () => {
  return (
    <div
      className="property-requirements-rules"
      aria-label="Property requirements & rules"
    >
      <h4>Requirements & Rules</h4>

      {requiremets_rules.map((requirement_rule, idx) => (
        <div
          className="property-requirement-rule"
          aria-label="Property requirement rule"
          key={idx}
        >
          <CheckMarkIcon className="fa" />
          <p>{requirement_rule}</p>
        </div>
      ))}

      <span>View all rules</span>
    </div>
  );
};

export default PropertyRequirmetsRules;
