import {shallow} from 'enzyme'
import React from 'react'
import LearnForm from '../src/LearnForm.jsx'

describe('<LearnForm />', () => {
 it('should contain a tow labels called DOCS and TECH ', () => {
  const wrapper = shallow(<LearnForm/>)
   expect(wrapper.contains(<label>DOCS</label>)).toEqual(true)
   expect(wrapper.contains(<label>TECH</label>)).toEqual(true)
})
})
