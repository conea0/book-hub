'use client';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.css';

const Login = () => {
  const onFinish = (values: string) => {
    console.log('Received values:', values);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>ログイン</h2>
        <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="ユーザー名"
            name="username"
            rules={[{ required: true, message: 'ユーザー名を入力してください' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="パスワード"
            name="password"
            rules={[{ required: true, message: 'パスワードを入力してください' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>ログイン状態を保持</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              ログイン
            </Button>
          </Form.Item>
        </Form>

        <div className="additional-options">
          <Button type="link" href= "/forgot">パスワードを忘れた場合</Button>
        </div>

        <div className="create-account">
          <Button type="primary" href="/create-account">
            アカウントを作成
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
