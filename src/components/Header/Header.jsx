import { Button } from "../Button/Button";
import "./Header.css";
import {useTelegram} from '../../hooks/useTelegram'
export const Header = () => {

const {onClose, user} = useTelegram()
  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.username}</span>
    </div>
  );
};
