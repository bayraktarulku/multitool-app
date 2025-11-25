/**
 * Navigation type definitions
 */

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';

/**
 * Bottom Tab Navigator types
 */
export type RootTabParamList = {
  Calculator: undefined;
  Converter: undefined;
  QRCode: undefined;
};

export type RootTabNavigationProp = BottomTabNavigationProp<RootTabParamList>;

/**
 * QR Code Tab Navigator types
 */
export type QRCodeTabParamList = {
  Scanner: undefined;
  Generator: undefined;
};

export type QRCodeTabNavigationProp =
  MaterialTopTabNavigationProp<QRCodeTabParamList>;

/**
 * Screen navigation props
 */
export type CalculatorScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Calculator'
>;
export type ConverterScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Converter'
>;
export type QRCodeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'QRCode'
>;

/**
 * Screen route props
 */
export type CalculatorScreenRouteProp = RouteProp<
  RootTabParamList,
  'Calculator'
>;
export type ConverterScreenRouteProp = RouteProp<RootTabParamList, 'Converter'>;
export type QRCodeScreenRouteProp = RouteProp<RootTabParamList, 'QRCode'>;

/**
 * Combined navigation props for screens
 */
export interface CalculatorScreenProps {
  navigation: CalculatorScreenNavigationProp;
  route: CalculatorScreenRouteProp;
}

export interface ConverterScreenProps {
  navigation: ConverterScreenNavigationProp;
  route: ConverterScreenRouteProp;
}

export interface QRCodeScreenProps {
  navigation: QRCodeScreenNavigationProp;
  route: QRCodeScreenRouteProp;
}
