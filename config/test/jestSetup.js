import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'
import enableHooks from 'jest-react-hooks-shallow'

enableHooks(jest, { dontMockByDefault: true })
