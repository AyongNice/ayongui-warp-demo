export function ModeTheme() {
  this.light = {
    themeBulue: '#40a9ff',
    themeWithe: '#fff',
    'ayong-grey-crescent': '#f4f4f5',
    'ayong-font-color': '#fff',
    'ayong-light': '#fff',
    'ayong-font-dark': '#222731',
    'ayong-plaster-grey': '#d3d5dc',
    'ayong-premium-grey': '#ededed',
    'ayong-primary-grey': '#a8c0fb',
  }
  this.dark = {
    themeBulue: '#53728b',
    themeWithe: '#b0b0b0',
    'ayong-grey-crescent': '#ff8cb8',
    'ayong-font-color': '#4067b6',
    'ayong-light': '#44444a',
    'ayong-font-dark': '#c9c9cb',
    'ayong-primary-grey': '#a8c0fb',
    'ayong-grey-crescent': '#85465f',
    'ayong-plaster-grey': '#6c6d71',
    'ayong-premium-grey': '#ababab',
    'ayong-primary-grey': '#959595',
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
