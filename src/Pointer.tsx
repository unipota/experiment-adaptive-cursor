import React, { useEffect, useState } from "react";
import { useMouse } from "react-use";

const Width = 24;
const Height = 24;

type FormType = "Pointer" | "Text" | "Button";

type Props = {
  form: FormType;
};

const Pointer = ({ form }: Props) => {
  const ref = React.useRef(null);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const { docX, docY } = useMouse(ref);

  const style = {
    width: Width,
    height: Height,
    borderRadius: "100%",
    backgroundColor: "gray",
    transform: `translate(${posX}px, ${posY}px)`,
    opacity: 0.5,
  };

  useEffect(() => {
    setPosX(docX - Width / 2);
    setPosY(docY - Height / 2);
  }, [docX, docY]);
  useEffect(() => {}, [form]);

  return <div className="pointer" style={style} ref={ref}></div>;
};

export default Pointer;
