import "../../assets/styles/Button/Button.css";
interface IButton {
  border?: string;
  backgroundColor?: string;
  text: string;
}
function Button({ text, border }: IButton) {
  return <button className={`button ${border}`}>{text}</button>;
}

export default Button;
