export const roleOptions = [
  { label: 'SDE', value: 'SDE' },
  { label: 'UI/UX Designer', value: 'UI/UX Designer' },
  { label: 'Dev Ops', value: 'Dev Ops' },
  { label: 'Tester', value: 'Tester' }
]

export const InputFeedback = ({ error }) => {
  if (error) return <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>
  return null
}
