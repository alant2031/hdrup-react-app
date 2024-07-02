import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";
import App from "../App";
import { render } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
	render(<App />);
});

test("Página Inicial", () => {
	const el = screen.queryByTestId("app_testid");
	expect(el).toBeVisible();
});

test("Listagem de todos os albums", async () => {
	const el = await screen.findByTestId("albums-app_testid");
	const el_list = await screen.findAllByTestId("album-card-title_testid");
	expect(el).toBeVisible();
	expect(el_list.length).toBe(100);
});

test("Ao clicar em um album o usuário deverá ser redirecionado para a listagem das fotos do album selecionado.", async () => {
	const first_album = (
		await screen.findAllByTestId("album-card-title_testid")
	)[0];

	const album_id = first_album.lastElementChild?.textContent;

	await userEvent.click(first_album);

	const photosApp = await screen.findByTestId("photos-app_testid_" + album_id);

	expect(photosApp).toBeVisible();
});
