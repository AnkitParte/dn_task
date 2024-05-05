import React, { useState } from 'react'
import ResizableBoxItem from '../../components/ResizableBoxItem/ResizableBoxItem'
import { Button, Heading } from '@chakra-ui/react'
import ModalForm from '../../components/ModalForm'
import useCountApi from './useCountApi'

const ResizableContainer = () => {
  const [countApiCall, setCountApiCall] = useState(false)
  const { count, loader } = useCountApi({ apiSwitch: countApiCall })
  const [reset, setReset] = useState(false)
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal((p) => !p)
  }

  let divStyle = { padding: '10px' }
  return (
    <div key={reset} style={{ padding: '20px' }}>
      <div>
        <Heading as='h2' size='lg'>
          Data Neuron Assignment
        </Heading>
      </div>
      <div style={divStyle}>
        <Button onClick={() => setReset((p) => !p)} size='sm'>
          Reset Window
        </Button>
        <Button
          size={'sm'}
          onClick={() => setCountApiCall((p) => !p)}
          ml={2}
          disabled={loader}
        >
          {!loader ? 'Get Api call count' : 'Getting...'}
        </Button>
        <Button size='sm' ml={2} onClick={handleModal}>
          Add User
        </Button>
      </div>
      <div style={{ ...divStyle, color: 'coral' }}>
        <Heading as='h5' size='xs'>
          Note : Due to free tier deployment of backend, Api call will going to
          take time initially, may be upto 1 min after that it gets better.
        </Heading>
      </div>
      <div style={divStyle}>
        <Heading as='h5' size='xs'>
          Add & Update API call count -{' '}
          <span style={{ color: 'coral' }}>{loader ? '--' : count}</span>
        </Heading>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ResizableBoxItem name={'Window 1'} width={600} height={300} />
        <ResizableBoxItem name={'Window 2'} width={600} height={300} />
        <ResizableBoxItem name={'Window 3'} width={900} height={300} />
      </div>
      {modal && (
        <ModalForm
          isOpen={modal}
          onClose={handleModal}
          setCountApiCall={setCountApiCall}
        />
      )}
    </div>
  )
}

export default ResizableContainer
