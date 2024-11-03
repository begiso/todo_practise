import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { Container, Headerblock } from "./Header.styled";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${styles.active} ${styles.link}` : styles.link;
  };

  return (
    <Headerblock>
      <Container>
        <NavLink to="/" className={getActiveClass}>
          ToDo
        </NavLink>
        <NavLink to="/list" className={getActiveClass}>
          List
        </NavLink>
      </Container>
    </Headerblock>
  );
};
