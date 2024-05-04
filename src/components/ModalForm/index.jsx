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
  useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { InputFeedback, roleOptions } from './helpers'
import { addUserApi } from './api'

const ModalForm = ({ isOpen, onClose, setCountApiCall }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [apiCallLoader, setApiCallLoader] = useState(false)
  const toast = useToast()

  const onSubmit = async (data) => {
    console.log('data->', data)
    setApiCallLoader(true)
    let createUser = await addUserApi(data)
    if (createUser?.status == 200) {
      setApiCallLoader(false)
      toast({
        title: 'User Added.',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
      setCountApiCall((p) => !p)
      onClose()
    } else {
      toast({
        title: 'Unable to create User',
        status: 'error',
        duration: 2000,
        isClosable: true
      })
      setApiCallLoader(false)
    }
  }
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
              {errors?.name && <InputFeedback error={errors?.name?.message} />}
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                placeholder='Enter user email...'
                {...register('email', { required: 'Email is required' })}
              />
              {errors?.email && (
                <InputFeedback error={errors?.email?.message} />
              )}
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Role</FormLabel>
              <Select
                placeholder='Select...'
                {...register('role', { required: 'Role is required' })}
              >
                {roleOptions?.map((it) => {
                  return <option>{it?.label}</option>
                })}
              </Select>
              {errors?.role && <InputFeedback error={errors?.role?.message} />}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              size='sm'
              mr={3}
              onClick={onClose}
              disabled={apiCallLoader}
            >
              Close
            </Button>
            <Button
              variant='outline'
              size='sm'
              colorScheme='blue'
              type='submit'
              disabled={apiCallLoader}
            >
              {apiCallLoader ? 'Submitting...' : 'Submit'}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default ModalForm
