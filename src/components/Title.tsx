import { TitleProps } from "../types";

function Title({ title }: TitleProps) {
  return <p className="font-bold mb-2">{title}</p>;
}

export default Title;
