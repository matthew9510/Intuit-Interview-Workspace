import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import RandomNumber from "../Components/RandomNumber";

describe("Successful fetch call", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve([1]),
      })
    ) as jest.Mock;
  });

  test("Shows a random number", async () => {
    // await act(async () => render(<RandomNumber />));
    render(<RandomNumber />)
    await waitFor(() => {
      const linkElement = screen.getByText(
        /Here is a random Number for you: 1/i
      );
      expect(linkElement).toBeInTheDocument();
    });
  });
});

// describe('Unsuccessful fetch call', ()=>{
//     beforeAll(()=>{
//         global.fetch = jest.fn(() =>
//         Promise.resolve({
//           json: () => Promise.reject("API is down"),
//         }),
//       ) as jest.Mock;
//     })

//     test('Shows a random number', () => {
//         render(<RandomNumber />);
//         const linkElement = screen.queryByText(/Here is a random Number for you: 1/i);
//         expect(linkElement).toBeInTheDocument();
//       });
// })
