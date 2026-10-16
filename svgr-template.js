const template = (variables, { tpl }) => tpl`
import { type IconProps } from '@/components/icons/types';
import { scalingMethods } from '@/utils';
${variables.imports};
const { HS, VS } = scalingMethods;
const ${variables.componentName} = ({ size = 24, color = '#000', style }: IconProps) => (
  ${variables.jsx}
);
${variables.exports};
`

module.exports = template
