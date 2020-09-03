import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CollectionsOverview } from './collections-overview.component'
configure({ adapter: new Adapter })

it('should render CollectionsOverview component', () => {
    expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot()
})