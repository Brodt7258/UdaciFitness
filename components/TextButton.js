import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function TextButton ({ children, opPress}) {
  return (
    <TouchableOpacity>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};