import { fireEvent, render, screen } from "@testing-library/react"
import Couter from "../Couter"

test("counter component is rendered", () => {
    render(<Couter/>);

    const btn = screen.getByText("Count");
    expect(btn).toBeInTheDocument()
})

test('check event click btn', async () => {
    render(<Couter/>)

    const btn = await screen.getByText('Count');

    await fireEvent.click(btn);

    const count = screen.getByText("1");

    expect(count.textContent).toContain('1');
})