import * as React from "react";

interface RechnungProps {
  // Define the props you want to accept
  duration: string | null;
  route: string | null;
}

const Rechnung: React.FC<RechnungProps> = (props) => {
  return (
    <div>
      <p>Duration: {props.duration}</p>
      <p>Route: {props.route}</p>
    </div>
  );
};

export default Rechnung;
