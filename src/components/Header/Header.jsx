import { Button } from "../Button/Button";
import "./Header.css";
import {useTelegram} from '../../hooks/useTelegram'
export const Header = () => {

const {onClose, user} = useTelegram()
  return (
    <div className={"header"}>
      <span className={"username"}>{user?.username}</span>
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
};
