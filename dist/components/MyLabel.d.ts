/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Text shown
     */
    label?: string;
    /**
     * Size of the text font
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizar texto
     */
    allCaps?: boolean;
    /**
     * Colores basicos del texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de fuente
     */
    fontColor?: string;
    /**
     * Color personalizado de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
