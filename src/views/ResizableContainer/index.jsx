import React, { useState } from 'react';
import ResizableBoxItem from '../../components/ResizableBoxItem/ResizableBoxItem';
import { Button, Heading } from '@chakra-ui/react';
import ModalForm from '../../components/ModalForm';

const ResizableContainer = () => {
  const [reset, setReset] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((p) => !p);
  };

  return (
    <div key={reset} style={{ padding: '20px' }}>
      <div>
        <Heading as='h2' size='lg'>
          Data Neuron Assignment
        </Heading>
      </div>
      <div style={{ padding: '10px' }}>
        <Button
          style={{ cursor: 'pointer' }}
          onClick={() => setReset((p) => !p)}
          size='xs'
        >
          Reset Window
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Heading as='h5' size='xs'>
          Add & Update API call count -{' '}
          <span style={{ color: 'coral' }}>{24}</span>
        </Heading>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ResizableBoxItem
          name={'Window 1'}
          width={600}
          height={300}
          handleModal={handleModal}
        />
        <ResizableBoxItem
          name={'Window 2'}
          width={600}
          height={300}
          handleModal={handleModal}
        />
        <ResizableBoxItem
          name={'Window 3'}
          width={900}
          height={300}
          handleModal={handleModal}
        />
      </div>
      {modal && <ModalForm isOpen={modal} onClose={handleModal} />}
    </div>
  );
};

export default ResizableContainer;
