import React from "react";
import { render } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";

describe ("Profile status", () => {
    // test("status test from props should be in the state", () =>{
    //     const component = render(<ProfileStatus status='new status'/>);
    //     expect (component.state.status).toBe('new status');
    // });
    test("no span after render", () =>{
        const component = render(<ProfileStatus status='new status'/>);
        let span = component.root.findByType('span')
        expect (span.innetText).toBe(1);
    })
})