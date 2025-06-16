import React, { Component } from 'react'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

export class books extends Component {
  render() {
    return (
      <ThemedView className="flex-1 items-center" safe={true}>
        <ThemedText className='text-xl font-bold'>You Reading list</ThemedText>
      </ThemedView>
    )
  }
}

export default books
