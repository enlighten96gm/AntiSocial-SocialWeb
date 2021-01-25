import React from 'react'
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus Component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status='lolol' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("lolol")
    })
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status='lolol' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("lolol")
    })
})