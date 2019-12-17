import React from "react";

interface ButtonProps {
  fetching: boolean;
  ClickHandler: () => void;
}

export const Button = ({
  ClickHandler,
  fetching
}: ButtonProps): React.ReactElement => (
  <div>
    <button className="container__button" onClick={() => ClickHandler()}>
      {fetching ? "loading" : "Fetch Albums"}
    </button>
  </div>
);
