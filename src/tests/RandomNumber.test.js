import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import RandomNumber from "../Components/RandomNumber";


describe("Successful fetch call", () => {
  beforeAll(() => {
    // global.fetch = jest.fn(() =>
    //   Promise.resolve({
    //     // status: 200,
    //     json: () => Promise.resolve([1]),
    //   })
    // )
//     jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//         ok: true,
//         status: 200,
//         json: () => Promise.resolve([0])
//     })
// );
// jest.spyOn(global, 'fetch').mockResolvedValue({
//     json: jest.fn().mockResolvedValue([0]])  
  }) 

// fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));

//   });

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

  test("Shows a random number", async () => {
    // await act(async () => render(<RandomNumber />));
    render(<RandomNumber />)
    await waitFor(() => {
      const linkElement = screen.getByText(
        /Here is a random Number for you:/i
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
