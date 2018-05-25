/* global describe it expect */

import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'

import { Button } from '.'

describe('Button Component', () => {
  it('renders correct button styles', () => {
    const wrapper = mount(<Button />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('color', 'white')
  })
})
