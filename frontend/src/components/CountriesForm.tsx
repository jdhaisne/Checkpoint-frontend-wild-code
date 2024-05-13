
import { Button, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_COUNTRY } from "../graphql/mutations/countries"
export default function CountriesForm() {
    const [addCountry, { data, loading, error }] = useMutation(ADD_COUNTRY);

    type FieldType = {
        name?: string;
        code?: string;
        emoji?: string;
    }

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        addCountry({variables: {data: values}})
      };
      
      const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (
    <Form
    
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off">
        <Form.Item<FieldType>
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input a country name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Emoji"
      name="emoji"
      rules={[{ required: true, message: 'Please input a country emoji!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Code"
      name="code"
      rules={[{ required: true, message: 'Please input a country code!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    </Form>
  );
}
