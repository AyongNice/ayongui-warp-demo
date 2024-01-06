export function ModeTheme() {
  this.light = {
    themeBulue: '#40a9ff',
    themeWithe: '#fff',
    'ayong-grey-crescent': '#f4f4f5',
    'ayong-font-color': '#fff'
  }
  this.dark = {
    themeBulue: '#53728b',
    themeWithe: '#b0b0b0',
    'ayong-grey-crescent': '#ff8cb8',
    'ayong-font-color': '#4067b6'
  }
  this.undefined = this.light
}

import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";

export const handoffTheme = () => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color])
  }, [color])

};
