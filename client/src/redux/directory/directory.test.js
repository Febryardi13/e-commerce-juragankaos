import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import directoryReducer, { INTIAL_STATE } from './directory.reducer'

configure({ adapter: new Adapter })

describe('directoryReducer', () => {
    it('should return initial state', () => {
        expect(directoryReducer(undefined, {})).toEqual(INTIAL_STATE)
    })
})
