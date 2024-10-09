import { buttonStyle, textPrimary, textSecondary } from "./BeLiver.css";

export const BeLiver = () => {
  return (
    <button className={buttonStyle}>
      <span className={textPrimary}>BE LIVER!</span>
      <span className={textSecondary}>ライバーになる！</span>
    </button>
  );
};
