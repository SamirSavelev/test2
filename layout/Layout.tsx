import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { LayoutProps } from "./Layout.props";
import { Container, MainContainer } from "./styles";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <Provider store={store}>
        <Container>{children}</Container>
      </Provider>
    </MainContainer>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
