import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TextCardComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const TextCardComponent = (props: TextCardComponentProps): JSX.Element => (
  <div>
    <p>TextCardComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<TextCardComponentProps>(TextCardComponent);
