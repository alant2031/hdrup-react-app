import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: RootProvider, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
