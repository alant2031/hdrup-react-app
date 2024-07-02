import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";
import App from "../App";
import { render } from "../utils/test-utils";
import AlbumsApp from "../components/AlbumsApp";

describe("Albums", () => {
	test("Main Page", () => {
		render(<App />);
		const el = screen.queryByTestId("app_testid");
		expect(el).toBeVisible();
	});

	test("List Albums", () => {});
});
