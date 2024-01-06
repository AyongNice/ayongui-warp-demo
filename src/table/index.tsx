import {usePrefersColor} from 'dumi';
import {useEffect} from "react";


export const themeIng = () => {
  // color 为当前应用的主题色，dark or light
  console.log(131)
  const [color] = usePrefersColor();
  useEffect(() => {
  }, [color])
  return null
};
