import { Alert, Space } from "antd";

export default function ErrorWrapper({ children }) {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {children}
    </Space>
  );
}

export function Error(props) {
  return <Alert type={props?.type ?? "error"} message={props.message} banner />;
}
