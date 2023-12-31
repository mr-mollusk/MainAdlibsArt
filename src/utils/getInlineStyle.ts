import { CSSProperties } from 'react';

import { cssVariable, CssVariableProps } from './cssVariable';

export interface GetInlineStyleProperties {
    style?: CSSProperties;
    variables?: CssVariableProps;
}

/**
 * @param {CSSProperties} style - inline styles,
 * @param {CssVariableProps} variables - object which contains **key** as a name of a variable and a value,
 * @returns inline style object
 */
export const getInlineStyle = ({ style = {}, variables = {} }: GetInlineStyleProperties) =>
    ({ ...style, ...cssVariable(variables) } as CSSProperties);
