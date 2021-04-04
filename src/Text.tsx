import React from "react";

type Props = {
  content: string;
};

const Text = ({ content }: Props) => {
  return <span className="text">{content}</span>;
};

export default Text;
