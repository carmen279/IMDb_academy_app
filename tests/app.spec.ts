import App from "../App.vue";
import { mount } from "@vue/test-utils";
import { getDataTestSelector } from "./utils";
import { getFilmStubs } from "./stubs/character-stubs.factory";

const characterCollection = getFilmStubs(5);

jest.spyOn(App, "mounted").mockImplementation(() => {
  App.characters = characterCollection;
});

describe("App elements testing", () => {
  const wrapper = mount(App);
  it("Should render the app with a card for each character", () => {
    expect(wrapper).toBeTruthy();
    const charactersearch = wrapper.find(
      getDataTestSelector("charactersearch")
    );
    const charactercard = wrapper.findAll(getDataTestSelector("charactercard"));
    expect(charactercard.length).toEqual(5);
    expect(charactersearch).toBeTruthy();
    expect(App.getRickAndMortyChars).toHaveBeenCalledTimes(1);
  });
});
