import './mylabel.css'

export interface MyLabelProps {
  /**
   * Text shown
   */
  label?: string;
  /**
   * Size of the text font
   */
  size?: 'normal'|'h1'|'h2'|'h3';
  /**
   * Capitalizar texto
   */
  allCaps?: boolean;
  /**
   * Colores basicos del texto
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Color personalizado de fuente 
   */
  fontColor?: string;
  /**
   * Color personalizado de fondo 
   */
  backgroundColor?: string;

}

export const MyLabel = ({ 
  allCaps, 
  backgroundColor='transparent',
  color='primary', 
  fontColor,
  label= 'No label', 
  size= "normal", 
}: MyLabelProps) => {
  return (
    <span className={ `label ${size} text-${color}` } style={{ color: fontColor, backgroundColor }} >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
