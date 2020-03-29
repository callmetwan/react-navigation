import * as React from 'react';
import { NavigationProp } from './types';
/**
 * Context which holds the navigation prop for a screen.
 */
declare const NavigationContext: React.Context<NavigationProp<any, string, any, any, {}> | undefined>;
export default NavigationContext;
