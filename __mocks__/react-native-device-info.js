export default {
  getUniqueId: jest.fn(() => 'mocked-unique-id'),
  getManufacturer: jest.fn(() => 'mocked-manufacturer'),
  getModel: jest.fn(() => 'mocked-model'),
  getSystemName: jest.fn(() => 'mocked-system-name'),
  getSystemVersion: jest.fn(() => 'mocked-system-version'),
  getVersion: jest.fn(() => 'mocked-version'),
  isTablet: jest.fn(() => false), // Add this line to mock isTablet
  // Add other methods you need to mock here
};
