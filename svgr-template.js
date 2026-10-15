const template = (variables, { tpl }) => tpl`
${variables.imports};
import { type IconProps } from '@/components/icons/types';

const ${variables.componentName} = ({ size = 24, color = '#000', style }: IconProps) => (
  ${variables.jsx}
);

${variables.exports};
`

module.exports = template
