import {
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { roleOptions } from './helpers';

const ModalForm = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('data->', data);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input
                type='text'
                placeholder='Enter user name...'
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p style={{ color: 'red', fontSize: '13px' }}>
                  {errors.name.message}
                </p>
              )}
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                placeholder='Enter user email...'
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p style={{ color: 'red', fontSize: '13px' }}>
                  {errors.email.message}
                </p>
              )}
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Role</FormLabel>
              <Select
                placeholder='Select...'
                {...register('role', { required: 'Role is required' })}
              >
                {roleOptions?.map((it) => {
                  return <option>{it?.label}</option>;
                })}
              </Select>
              {errors.role && (
                <p style={{ color: 'red', fontSize: '13px' }}>
                  {errors.role.message}
                </p>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' size='sm' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant='outline'
              size='sm'
              colorScheme='blue'
              type='submit'
            >
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
