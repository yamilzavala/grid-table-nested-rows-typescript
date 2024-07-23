import { HiMiniArrowSmallUp } from "react-icons/hi2";
import { GoToTopButtonProps } from "../../types/types";

export default function GoToTopButton({handleSetGoToTop}: GoToTopButtonProps) {
  return (
    <div className="container-btn" style={{marginTop: '1rem'}}>
      <button className="go-top-btn" onClick={handleSetGoToTop}>
        Go to the top
      </button>
      <HiMiniArrowSmallUp className="collapse-icon" onClick={handleSetGoToTop} />
    </div>
  );
}
