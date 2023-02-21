// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState } from "react";

function CommonComponent(props) {
  const [isActive, setActive] = useState(false);
  const mouseEnterHandler = () => {
    setActive(true);
    props.mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {props.children}
    </div>
  )
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <CommonComponent mouseEnterCallbak={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </CommonComponent>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <CommonComponent mouseEnterCallbak={mouseEnterCallbak} >
      <p>{content}</p>
    </CommonComponent>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <CommonComponent mouseEnterCallbak={mouseEnterCallbak} >
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </CommonComponent>
  );
};
