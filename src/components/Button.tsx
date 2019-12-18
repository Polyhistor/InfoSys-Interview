import React from "react";

export interface ButtonProps {
  fetching: boolean;
  clickHandler: () => void;
}

export const Button = ({
  clickHandler,
  fetching
}: ButtonProps): React.ReactElement => (
  <div>
    <button className="container__button" onClick={() => clickHandler()}>
      {fetching ? "loading" : "Fetch Albums"}
    </button>
  </div>
);
