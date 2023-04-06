import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import RandomNumber from "../Components/RandomNumber";

// mock the fetch function
const mockFetch = (data: any, ok = true) =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve(data),
    })
  );

describe("RandomNumber component", () => {
  it("renders the component and fetches a random number on mount", async () => {
    const mockRandomNumber = [123];
    global.fetch = mockFetch(mockRandomNumber);

    render(<RandomNumber />);

    // wait for the component to finish loading
    await waitFor(() => {
      expect(screen.getByText(/random Number for you/)).toBeInTheDocument();
    });

    // check that the random number is displayed
    expect(
      screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === "p" && content.includes("123")
        );
      })
    ).toBeInTheDocument();
  });

  it("fetches a new random number when the button is clicked", async () => {
    const mockRandomNumber1 = [123];
    const mockRandomNumber2 = [456];
    global.fetch = mockFetch(mockRandomNumber1);

    render(<RandomNumber />);

    // wait for the component to finish loading
    await waitFor(() => {
      expect(screen.getByText(/random Number for you/)).toBeInTheDocument();
    });

    // click the button to fetch a new random number
    global.fetch = mockFetch(mockRandomNumber2);
    fireEvent.click(screen.getByText(/new random number/i));

    // wait for the component to update with the new random number
    await waitFor(() => {
      expect(
        screen.getByText((content, element) => {
          return (
            element?.tagName.toLowerCase() === "p" && content.includes("456")
          );
        })
      ).toBeInTheDocument();
    });
  });

  it("displays an error message when the fetch fails", async () => {
    const mockErrorMessage = "Fetch failed";
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error(mockErrorMessage)));

    render(<RandomNumber />);

    // wait for the component to display the error message
    await waitFor(() => {
      expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
    });
  });

  it("displays an error message when the fetch returns ok === false", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(<RandomNumber />);

    // wait for the component to display the error message
    await waitFor(() => {
      expect(screen.getByText("Couldn't get new number")).toBeInTheDocument();
    });
  });
});
