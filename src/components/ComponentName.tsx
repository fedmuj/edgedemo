import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ComponentNameProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ComponentName = (props: ComponentNameProps): JSX.Element => (
  <div>
    <p>ComponentName Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<ComponentNameProps>(ComponentName);
