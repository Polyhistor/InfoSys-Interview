import React from "react";

interface ButtonProps {
  fetching: boolean;
  ClickHandler: () => void;
}

export const Button = ({ ClickHandler, fetching }: ButtonProps) => {
  return (
    <div>
      <button className="container__button" onClick={() => ClickHandler()}>
        Fetch Albums
      </button>
      {fetching ? "loading" : null}
    </div>
  );
};
