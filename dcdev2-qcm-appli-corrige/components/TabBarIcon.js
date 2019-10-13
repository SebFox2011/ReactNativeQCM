import React from 'react';
import PlatformIcon from './PlatformIcon';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <PlatformIcon
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
